const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  }).format(value); // TODO

export default formatValue;
