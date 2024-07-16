document
  .getElementById('calculateButton')
  .addEventListener('click', calculateTax);

function calculateTax() {
  const annualSalary =
    parseFloat(document.getElementById('annualSalary').value) || 0;
  const dividendIncome =
    parseFloat(document.getElementById('dividendIncome').value) || 0;

  // Calculate tax on salary
  let salaryTax = 0;
  if (annualSalary <= 28000) {
    salaryTax = annualSalary * 0.23;
  } else if (annualSalary <= 50000) {
    salaryTax = 28000 * 0.23 + (annualSalary - 28000) * 0.35;
  } else {
    salaryTax = 28000 * 0.23 + 22000 * 0.35 + (annualSalary - 50000) * 0.43;
  }

  // Calculate regional and municipal tax on salary
  const regionalTax = annualSalary * 0.0228;
  const municipalTax = annualSalary * 0.0045;

  // Calculate tax on dividend income
  const dividendTax = dividendIncome * 0.26;

  // Total tax due
  const totalTax = salaryTax + regionalTax + municipalTax + dividendTax;

  // Total income after tax
  const totalIncomeAfterTax = annualSalary + dividendIncome - totalTax;

  // Display results
  document.getElementById(
    'totalIncomeAfterTax'
  ).textContent = `Reddito Totale Dopo le Tasse: €${totalIncomeAfterTax.toFixed(
    2
  )}`;
  document.getElementById(
    'totalTaxDue'
  ).textContent = `Totale Imposte Dovute: €${totalTax.toFixed(2)}`;
  document.getElementById(
    'taxOnSalary'
  ).textContent = `Imposte sul Reddito: €${(
    salaryTax +
    regionalTax +
    municipalTax
  ).toFixed(2)}`;
  document.getElementById(
    'taxOnDividendIncome'
  ).textContent = `Imposte sui Dividendi: €${dividendTax.toFixed(2)}`;

  document.getElementById('results').style.display = 'block';
}
