// $1,250 or $1,250.50 — whole amounts without cents, anything else with both digits.
const whole = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const cents = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

export function formatMoney(amount: number): string {
  return Number.isInteger(amount) ? whole.format(amount) : cents.format(amount);
}
