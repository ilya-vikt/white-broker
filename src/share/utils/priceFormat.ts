export const priceFormat = (price: number): string => {
  const formatter = new Intl.NumberFormat(undefined, {
    useGrouping: true,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
  return formatter.format(price);
};
