export const API_URL: string =
  'wss://ws.finnhub.io?token=cnjh79hr01qmfbtbcprgcnjh79hr01qmfbtbcps0';

const token = import.meta.env.VITE_API_TOKEN;
export const API_BASE_URL = 'https://api.iex.cloud/v1';
export const CURRENT_PRICE_API_URL = (stockSymbol:string) =>
  `${API_BASE_URL}/data/CORE/QUOTE/${stockSymbol}?token=${token}`;
// export const HISTORICAL_DATA_API_URL = ''
export const CURRENCY_SYMBOL_MAPPER: { [key: string]: string } = {
  USD: '$', // United States Dollar
  EUR: '€', // Euro
  GBP: '£', // British Pound Sterling
  JPY: '¥', // Japanese Yen
  CNY: '¥', // Chinese Yuan
  INR: '₹', // Indian Rupee
  AUD: 'A$', // Australian Dollar
  CAD: 'C$', // Canadian Dollar
  CHF: 'CHF', // Swiss Franc
  HKD: 'HK$', // Hong Kong Dollar
  NZD: 'NZ$', // New Zealand Dollar
  SGD: 'S$', // Singapore Dollar
  SEK: 'kr', // Swedish Krona
  KRW: '₩', // South Korean Won
  ZAR: 'R', // South African Rand
  // Add more currencies as needed
};
