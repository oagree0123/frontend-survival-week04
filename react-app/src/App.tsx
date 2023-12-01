import { useInterval, useLocalStorage } from 'usehooks-ts';
import useFetchRestaurnats from './hooks/useFetchRestaurants';
import Cart from './components/Cart';
import FilteredRestaurantTable from './components/FilteredRestaurantTable';
import ReceiptPrinter from './components/ReceiptPrinter';
import Receipt from './types/Receipt';

const emptyReceipt = {} as Receipt;

export default function App() {
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  const restaurants = useFetchRestaurnats();

  useInterval(() => {
    if (receipt.id) {
      setReceipt(emptyReceipt);
    }
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코드 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <FilteredRestaurantTable restaurants={restaurants} />
      <ReceiptPrinter receipt={receipt} />
    </div>
  );
}
