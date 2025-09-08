export namespace Finance {
    export class LoanCalculator {
        constructor (public principal: number, public annualRate: number, public years: number){}
        calculateMonthlyPayment(): number {
            const monthlyRate = this.annualRate / 100 / 12;
            const numberOfPayments = this.years * 12;
            const payment = this.principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
            return payment;
        }
    }

    export class TaxCalculator {
        constructor (public income: number, public taxRate: number){}
        calculateTax(): number {
            return this.income * (this.taxRate / 100);
        }
    }
}
 

