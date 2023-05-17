using UnitTestExample;

namespace TestPayrollClass
{
    public class PayrollTest : IDisposable
    {
        Payroll testCase;
        public PayrollTest()
        {
            // setup the test
            testCase = new Payroll();
            //testCase.Hours = 20;
            //testCase.Hourly = 10;

        }
        public void Dispose()
        {
            // close down your test
        }

        [Theory]
        [InlineData(20, 10, 200)]
        [InlineData(50, 10, 550)]
        public void TestGrossPayIsCorrect(Decimal hours, Decimal rate, Decimal expected)
        {
            //Arrange
            // Decimal expected = 200;
            testCase.Hours = hours;
            testCase.Hourly = rate;
            //Act
            Decimal actual = testCase.GrossPay;
            //Assert
            Assert.Equal(expected, actual);
        }
        [Theory]
        [InlineData(20, 10, 7)]
        [InlineData(50, 10, 19.25)]
        public void TestLocalTaxesIsCorrect(Decimal hours, Decimal rate, Decimal expected)
        {
            //Arrange
            Decimal taxRate = (Decimal).035;
            //Decimal expected = 200 * (Decimal).035;//7
            testCase.Hours = hours;
            testCase.Hourly = rate;
            //Act
            Decimal actual = testCase.LocalTaxes(taxRate);
            //Assert
            Assert.Equal(expected, actual);
        }
    }
}