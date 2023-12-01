// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';
import Receipt from '../types/Receipt';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({
  receipt,
}: ReceiptPrinterProps) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  return (
    <div
      style={{
        width: '50%',
        border: '1px solid black',
        textAlign: 'center',
      }}
    >
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{receipt.id}</p>
      </div>
      <div>
        <h3>주문 목록</h3>
        <ul>

          {
            receipt.menu.map((menu) => (
              <li
                key={menu.id}
                style={{
                  display: 'flex',
                  paddingBlock: '.5rem',
                }}
              >
                <span style={{ margin: '0 auto' }}>
                  {menu.name}
                  (
                  {menu.price.toLocaleString()}
                  원)
                </span>
              </li>
            ))
          }
        </ul>
      </div>
      <p>
        합계:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
