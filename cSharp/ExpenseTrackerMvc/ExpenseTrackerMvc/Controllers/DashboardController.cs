using ExpenseTrackerMvc.Data;
using ExpenseTrackerMvc.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Globalization;

namespace ExpenseTrackerMvc.Controllers
{
    public class DashboardController : Controller
    {
        private readonly AppDbContext _context;

        public DashboardController(AppDbContext context)
        {
            _context = context;
        }
        public async Task<ActionResult> Index()
        {
            //Last 7 Days
            DateTime StartDate = DateTime.Today.AddDays(-6);
            DateTime EndDate = DateTime.Today;

            //var SelectedTransactions = from transaction in _context.Transactions
            //                           join category in _context.Categories
            //                           on transaction.CategoryId equals category.CategoryId
            //                           select transaction;


            //SelectedTransactions = SelectedTransactions.Where(x => x.Date >= StartDate && x.Date <= EndDate);

            //await SelectedTransactions.ToListAsync();

            List<Transaction> SelectedTransactions = await _context.Transactions
                .Include(x => x.Category)
                .Where(y => y.Date >= StartDate && y.Date <= EndDate)
                .ToListAsync();




            //Total Income
            int TotalIncome = SelectedTransactions
                .Where(i => i.Category.Type == "Income")
                .Sum(j => j.Amout);
            ViewBag.TotalIncome = TotalIncome.ToString("C0");

            //Total Expense
            int TotalExpense = SelectedTransactions
                .Where(i => i.Category.Type == "Expense")
                .Sum(j => j.Amout);
            ViewBag.TotalExpense = TotalExpense.ToString("C0");

            //Balance
            int balance =  TotalIncome - TotalExpense;
            CultureInfo culture = CultureInfo.CreateSpecificCulture("lt-LT");
            culture.NumberFormat.CurrencyNegativePattern = 1;
            ViewBag.Balance = String.Format(culture, "{0:C0}", balance);

            //Doughnut chart - expense by category
            ViewBag.DoughnutChartData = SelectedTransactions.Where(i => i.Category.Type == "Expense").GroupBy(j => j.Category.CategoryId).Select(k => new
            {
                amount = k.Sum(j => j.Amout),
                formattedAmount = k.Sum(j => j.Amout).ToString("C0"),
                categoryTitleWithIcon = k.First().Category.TitleWithIcon
            }).OrderByDescending(l=> l.amount).ToList();


            //Spline chart income vs expense
            //income
            List<SplineChartData> incomeSummary = SelectedTransactions.Where(i => i.Category.Type == "Income").GroupBy(j=> j.Date).Select(k => new SplineChartData()
            {
                day = k.First().Date.ToString("dd-MMM"),
                income = k.Sum(l=> l.Amout)
            }).ToList();
            //Expense
            //List<SplineChartData> expenseSummary = SelectedTransactions.Where(i => i.Category.Type == "Expense").GroupBy(j=> j.Date).Select(k => new SplineChartData()
            //{
            //    day = k.First().Date.ToString("dd-MMM"),
            //    income = k.Sum(l=> l.Amout)
            //}).ToList();
            List<SplineChartData> expenseSummary = SelectedTransactions
                .Where(i => i.Category.Type == "Expense")
                .GroupBy(j => j.Date)
                .Select(k => new SplineChartData()
                {
                    day = k.First().Date.ToString("dd-MMM"),
                    expense = k.Sum(l => l.Amout)
                })
                .ToList();


            //combine income and expense
            string[] last7Days = Enumerable.Range(0, 7).Select(i => StartDate.AddDays(i).ToString("dd-MMM")).ToArray();

            ViewBag.SplineChartData = from day in last7Days
                                      join income in incomeSummary on day equals income.day into dayIncomeJoined
                                      from income in dayIncomeJoined.DefaultIfEmpty()
                                      join expense in expenseSummary on day equals expense.day into expenseJoined
                                      from expense in expenseJoined.DefaultIfEmpty()
                                      select new
                                      {
                                          day = day,
                                          income = income is null ? 0 : income.income,
                                          expense = expense is null ? 0 : expense.expense
                                      };

            //recent transactions
            ViewBag.RecentTransactions = await _context.Transactions
                .Include(x => x.Category)
                .OrderByDescending(j => j.Date)
                .Take(5).ToListAsync();

            return View();
        }
    }
    public class SplineChartData
    {
        public string day;
        public int income;
        public int expense;

    }
}
