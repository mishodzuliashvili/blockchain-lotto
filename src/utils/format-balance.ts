export default function formatBalance(rawBalance: string) {
  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2);
  return balance;
}
