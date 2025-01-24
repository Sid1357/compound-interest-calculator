const btn = document.getElementById("calculate-button");
btn.addEventListener("click", calculate);
const ctx = document.getElementById("myChart");
let currChart;

function calculate() {
    // Input values
    let P = parseFloat(document.getElementById("starting-balance").value);
    let r = parseFloat(document.getElementById("interest-rate").value) / 100;
    let n = parseInt(document.getElementById("compound").value);
    let t = parseFloat(document.getElementById("years").value);
    let PMT = parseFloat(document.getElementById("contribution").value);
    let chartType = document.getElementById("chart-type").value;

    // Validate inputs
    if (isNaN(P) || isNaN(r) || isNaN(n) || isNaN(t) || isNaN(PMT)) {
        alert("Please enter valid inputs for all fields.");
        return;
    }

    // Compound interest calculation
    let temp = Math.pow(1 + r / n, n * t);
    let result1 = temp * P; // Principal and interest
    let result2 = PMT * ((temp - 1) / (r / n)); // Contribution with interest
    let result = (result1 + result2).toFixed(2);

    // Display result
    document.getElementById("result").innerText = `Result: $${result}`;

    // Total contribution without interest
    let totalContribution = P + PMT * 12 * t;

    // Update chart
    if (currChart != null) {
        currChart.destroy();
    }
    currChart = new Chart(ctx, {
        type: chartType,
        data: {
            labels: ["Without Interest", "With Interest"],
            datasets: [
                {
                    label: "Total Amount ($)",
                    data: [totalContribution, result],
                    backgroundColor: ["#FF6384", "#36A2EB"],
                    borderColor: ["#FF6384", "#36A2EB"],
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}
