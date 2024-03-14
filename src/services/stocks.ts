import { CURRENT_PRICE_API_URL } from '@/src/constants'
export async function getCurrentPrice(stockSymbol = 'META') {
  try {
    const response = await fetch(CURRENT_PRICE_API_URL(stockSymbol));
    const data = await response.json();
    if (response.status !== 200) throw new Error('Some error occured');
    return data;
  } catch (error) {
    throw error;
  }
}