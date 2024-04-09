export const declineYear = (y: number) =>
  /\d*1\d$/.test(y.toString()) || /[05-9]$/.test(y.toString())
    ? 'лет'
    : /1$/.test(y.toString())
      ? 'год'
      : 'года';
