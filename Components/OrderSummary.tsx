import { css } from '@emotion/react';
import Link from 'next/link';

type CookieOrder = {
  productId: number;
  quantity: number;
};
type Product = {
  id: number;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
};

type Props = {
  totalOrder: CookieOrder[];
  products: Product[];
};

function sumFinder(cookie: CookieOrder[], products: Product[]) {
  let sum = 0;

  cookie.forEach((order) => {
    const currentProd = products.find(
      (product) => product.id === order.productId,
    ) || { productPrice: 0 };
    const currentProdPrice = currentProd.productPrice;
    sum += order.quantity * currentProdPrice;
  });
  return sum;
}

const orderSummarySectionStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  margin: 1%;
  border: 1px solid black;
  border-radius: 10px;
`;

export default function OrderSummary(props: Props) {
  return (
    <section id="OrderSummarySection" css={orderSummarySectionStyles}>
      <div>
        <h3>Order Summary:</h3>

        {props.totalOrder.map((order) => {
          const currentProd = props.products.find(
            (product) => product.id === order.productId,
          ) || { productTitle: 'unidentified string' };
          const currentProdTitle: string = currentProd.productTitle;
          return (
            <li key={`product-${order.productId}`}>
              {currentProdTitle} x {order.quantity}
            </li>
          );
        })}
      </div>
      <div>
        <h3>Sum: {sumFinder(props.totalOrder, props.products)}</h3>
        <Link href="/checkout">
          <a>
            <button>checkout</button>
          </a>
        </Link>
      </div>
    </section>
  );
}
