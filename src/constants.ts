export const API_URL: string =
  'wss://ws.finnhub.io?token=cnjh79hr01qmfbtbcprgcnjh79hr01qmfbtbcps0';

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
