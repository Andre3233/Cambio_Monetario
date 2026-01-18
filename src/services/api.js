const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

export async function exchangeRateApi(fromCurrency) {
  try {
    const response = await fetch(`${BASE_URL}/${fromCurrency}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
