import { format } from "date-fns";
export function formatUSD(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(amount);
}



export function formatDate(dateString) {
  return format(new Date(dateString), "dd MMM yyyy");
}
