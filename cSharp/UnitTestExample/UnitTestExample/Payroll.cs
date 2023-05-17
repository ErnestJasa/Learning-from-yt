using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTestExample
{
    public class Payroll
    {
        private Decimal _grossPay;

        public Decimal GrossPay
        {
            get
            {
                if (Hours <= 40)
                {
                    _grossPay = Hourly * Hours;
                }
                else if (Hours > 40)
                {
                    _grossPay = Hourly * 40 + (Hours - 40) * Hourly * (Decimal)1.5;
                }
                return _grossPay;
            }
            set { _grossPay = value; }
        }

        public Decimal Hourly { get; set; }
        public Decimal Hours { get; set; }

        public Payroll(decimal grossPay, decimal hourly, decimal hours)
        {
            GrossPay = grossPay;
            Hourly = hourly;
            Hours = hours;
        }

        public Payroll()
        {
        }

        public Decimal LocalTaxes(Decimal taxRate)
        {
            return GrossPay * taxRate;
        }
    }
}
