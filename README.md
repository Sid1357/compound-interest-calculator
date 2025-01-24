# Compound Interest Calculator

This is a simple **Compound Interest Calculator** built using HTML, CSS, and JavaScript. It allows users to calculate compound interest based on principal, contribution, interest rate, time, and compounding frequency. Additionally, it visualizes the results using charts.

## Features

1. **User Input Fields**:
   - Starting balance (Principal amount)
   - Monthly contribution
   - Interest rate
   - Time period (in years)
   - Compounding frequency (Daily, Monthly, Annually)
   - Chart type (Bar or Line)

2. **Dynamic Chart**:
   - Visualize the calculated values using a bar or line chart powered by [Chart.js](https://www.chartjs.org/).

3. **Input Validation**:
   - Ensures that all fields are correctly filled with valid numeric values.

4. **Responsive Design**:
   - Centered and aesthetically pleasing UI with hover effects for the button.

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in your browser.
3. Enter the necessary details:
   - Starting balance (e.g., 1000)
   - Monthly contribution (e.g., 100)
   - Interest rate (e.g., 5 for 5%)
   - Time period (e.g., 10 years)
   - Compounding frequency (Daily, Monthly, or Annually)
   - Chart type (Bar or Line)
4. Click on the **"Calculate"** button to compute the compound interest and visualize the result.

## File Structure

- `index.html`: The main HTML file for the calculator.
- `style.css`: Contains the styles for the calculator UI.
- `index.js`: Includes the logic for calculating compound interest and rendering the charts.

## Example Formula

The calculator uses the following formula:

**A = P(1 + r/n)<sup>nt</sup> + PMT((1 + r/n)<sup>nt</sup> - 1)/(r/n)**

Where:
- `P` = Starting balance (Principal)
- `PMT` = Monthly contribution
- `r` = Annual interest rate (in decimal form)
- `n` = Compounding frequency
- `t` = Time in years

## Inspiration

This project was inspired by a YouTube tutorial https://www.youtube.com/watch?v=e2xS22rNUgU on creating a compound interest calculator. Special thanks to the creator for providing the initial guidance and motivation to build this project. 🎥

---

## Dependencies

- **Chart.js**: For creating beautiful and interactive charts. The library is included via CDN in the `index.html`.

---

Happy Coding! 🚀
