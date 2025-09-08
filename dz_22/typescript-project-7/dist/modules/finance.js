export var Finance;
(function (Finance) {
    class LoanCalculator {
        principal;
        annualRate;
        years;
        constructor(principal, annualRate, years) {
            this.principal = principal;
            this.annualRate = annualRate;
            this.years = years;
        }
        calculateMonthlyPayment() {
            const monthlyRate = this.annualRate / 100 / 12;
            const numberOfPayments = this.years * 12;
            const payment = this.principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            return payment;
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        income;
        taxRate;
        constructor(income, taxRate) {
            this.income = income;
            this.taxRate = taxRate;
        }
        calculateTax() {
            return this.income * (this.taxRate / 100);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (Finance = {}));
//# sourceMappingURL=finance.js.map