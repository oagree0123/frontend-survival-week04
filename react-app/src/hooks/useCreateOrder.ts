import Menu from '../types/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';

export default function useCreateOrder() {
  const createOrder = async (menu: Menu[]) => {
    const totalPrice = calculateTotalPrice(menu);

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu, totalPrice }),
    });

    const { receipt } = await response.json();
    console.log(`receipt: ${receipt}`);

    return receipt;
  };

  return {
    createOrder,
  };
}
