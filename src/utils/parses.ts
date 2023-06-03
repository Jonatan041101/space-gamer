export const parsePriceValueMoneyARS = (price: number | undefined | null) => {
  if (!price) return '';
  return price
    ?.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
    })
    .split(',')[0];
};
