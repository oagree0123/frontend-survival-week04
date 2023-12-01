import { useLocalStorage } from 'usehooks-ts';
import Menu from '../types/Menu';

type CartItemProps = {
  menu: Menu;
  handleClick: (id: string) => void;
}

export default function CartItem({
  menu,
  handleClick,
}: CartItemProps) {
  return (
    <li
      key={menu.id}
      style={{
        display: 'flex',
        paddingBlock: '0.5rem',
      }}
    >
      <span
        style={{
          margin: '0 auto',
        }}
      >
        {menu.name}
        (
        {menu.price.toLocaleString()}
        원)
      </span>
      <button
        type="button"
        onClick={() => {
          handleClick(menu.id);
        }}
      >
        취소
      </button>
    </li>
  );
}
