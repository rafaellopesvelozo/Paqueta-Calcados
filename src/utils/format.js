export const formatCurrency = (value) => {
  return new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    signDisplay: "auto",
  }).format(value);
};
