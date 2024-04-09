export const priceFormat = (price: number): string => {
  const formatter = new Intl.NumberFormat(undefined, {
    useGrouping: true,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
  return formatter.format(price);
};

export const shortenNumber = (num: number): string => {
  const abbreviations = ['', 'тыс', 'млн', 'млрд'];
  const tier = (Math.log10(num) / 3) | 0;

  if (tier === 0) return num.toString().replace('.', ',');

  const suffix = abbreviations[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;

  const formatted = scaled
    .toFixed(1)
    .replace(/\.?0*$/, '')
    .replace('.', ',');

  return formatted + ' ' + suffix;
};
