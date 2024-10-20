class Budget {
    constructor() {
        this.income = 0;
        this.costOfBill = [];
        this.nameOfBill = [];
        this.costOfMisc = [];
        this.nameOfMisc = [];
    }

    addBill(name, cost) {
        this.nameOfBill.push(name);
        this.costOfBill.push(cost);
    }

    addMisc(name, cost) {
        this.nameOfMisc.push(name);
        this.costOfMisc.push(cost);
    }

    totalCostOfBills() {
        return this.costOfBill.reduce((total, cost) => total + cost, 0).toFixed(2);
    }

    totalCostOfMisc() {
        return this.costOfMisc.reduce((total, cost) => total + cost, 0).toFixed(2);
    }

    displayResults() {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = `
            <h2>Budget Summary</h2>
            <p>Total Cost of Bills: $${this.totalCostOfBills()}</p>
            <p>Total Cost of Miscellaneous: $${this.totalCostOfMisc()}</p>
            <p>Leftover Income: $${(this.income - this.totalCostOfBills() - this.totalCostOfMisc()).toFixed(2)}</p>
        `;
    }
}

const budget = new Budget();

function addBillInputs() {
    const numberOfBills = document.getElementById('bills').value;
    const billInputsDiv = document.getElementById('bill-inputs');
    billInputsDiv.innerHTML = '';

    for (let i = 0; i < numberOfBills; i++) {
        billInputsDiv.innerHTML += `
            <input type="text" placeholder="Bill Name" id="billName${i}">
            <input type="number" placeholder="Bill Cost" id="billCost${i}">
        `;
    }
}

function addMiscInputs() {
    const numberOfMisc = document.getElementById('misc').value;
    const miscInputsDiv = document.getElementById('misc-inputs');
    miscInputsDiv.innerHTML = '';

    for (let i = 0; i < numberOfMisc; i++) {
        miscInputsDiv.innerHTML += `
            <input type="text" placeholder="Misc Name" id="miscName${i}">
            <input type="number" placeholder="Misc Cost" id="miscCost${i}">
        `;
    }
}

function calculateBudget() {
    budget.income = parseFloat(document.getElementById('income').value);
    const numberOfBills = document.getElementById('bills').value;
    const numberOfMisc = document.getElementById('misc').value;

    for (let i = 0; i < numberOfBills; i++) {
        const name = document.getElementById(`billName${i}`).value;
        const cost = parseFloat(document.getElementById(`billCost${i}`).value);
        budget.addBill(name, cost);
    }

    for (let i = 0; i < numberOfMisc; i++) {
        const name = document.getElementById(`miscName${i}`).value;
        const cost = parseFloat(document.getElementById(`miscCost${i}`).value);
        budget.addMisc(name, cost);
    }

    budget.displayResults();
}

