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
            DateTime StartDate = DateTime.Now.AddDays(-6);
            DateTime EndDate = DateTime.Now;

            List<Transaction> SelectedTransactions = await _context.Transactions
                .Include(x => x.Category)
                .Where(y => y.Date >= StartDate && y.Date <= EndDate)
                .ToListAsync();



            //var SelectedTransactions = from transaction in _context.Transactions
            //                           join category in _context.Categories
            //                           on transaction.CategoryId equals category.CategoryId
            //                           select transaction;


            //SelectedTransactions = SelectedTransactions.Where(x => x.Date >= StartDate && x.Date <= EndDate);

            //await SelectedTransactions.ToListAsync();


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

            return View();
        }
    }
}
