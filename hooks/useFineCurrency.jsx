import useCurrency from "./useCurrency";
import currency from "@/data/currency.json";

const useFineCurrency = () => {
  const selectedCurrency = useCurrency("/");
  const usdRate = selectedCurrency.usd;
  const euroRate = selectedCurrency.eur;
  const lkrRate = selectedCurrency.lkr;

  const usdSymbol = currency.USD;
  const euroSymbol = currency.EUR;
  const lkrSymbol = currency.LKR;

  // console.log(currency.USD);

  return { lkrRate, usdRate, euroRate, usdSymbol, euroSymbol, lkrSymbol };
};

export default useFineCurrency;
