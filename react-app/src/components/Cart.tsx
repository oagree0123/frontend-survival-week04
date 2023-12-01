import { useLocalStorage } from 'usehooks-ts';

import CartItem from './CartItem';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import useCreateOrder from '../hooks/useCreateOrder';

import Menu from '../types/Menu';
import Receipt from '../types/Receipt';

type CartType = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({
  setReceipt,
}: CartType) {
  const [selectedMenus, setMenus] = useLocalStorage<Menu[]>('cart', []);
  const { createOrder } = useCreateOrder();
  const totalPrice = calculateTotalPrice(selectedMenus);

  const handleCancleClick = (id: string) => {
    const filteredMenus = selectedMenus.filter((selectedMenu) => selectedMenu.id !== id);
    setMenus([...filteredMenus]);
  };

  const handleOrderClick = async () => {
    if (selectedMenus.length === 0) {
      return;
    }
    const receipt = await createOrder(selectedMenus);
    setReceipt(receipt);

    setMenus([]);
  };

  return (
    <div
      style={{
        marginBottom: '3rem',
      }}
    >
      <h2>점심 바구니</h2>
      <ul
        style={{
          width: '20%',
        }}
      >
        {
          selectedMenus.map((menu) => (
            <CartItem
              key={menu.id + Math.random()}
              menu={menu}
              handleClick={handleCancleClick}
            />
          ))
        }
      </ul>
      <button
        type="button"
        onClick={handleOrderClick}
      >
        합계:
        {' '}
        {totalPrice.toLocaleString()}
        원 주문
      </button>
    </div>
  );
}
