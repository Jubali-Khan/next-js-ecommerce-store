import { css } from '@emotion/react';

function sumFinder(cookie, products) {
  let sum = 0;

  cookie.forEach((order) => {
    const currentProd = products.find(
      (product) => product.id === order.productId,
    );
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

export default function OrderSummary(props) {
  return (
    <section id="OrderSummarySection" css={orderSummarySectionStyles}>
      <div>
        <h3>Order Summary:</h3>
        {/* <h3>
          {props.products.map((prod) => (
            <li key={`prod-${prod.id}`}>{prod.productTitle}</li>
          ))}
        </h3> */}

        {props.totalOrder.map((order) => {
          const currentProd = props.products.find(
            (product) => product.id === order.productId,
          );
          const currentProdTitle = currentProd.productTitle;
          return (
            <li key={`product-${order.productId}`}>
              {currentProdTitle} x {order.quantity}
            </li>
          );
        })}
      </div>
      <div>
        <h3>Sum: {sumFinder(props.totalOrder, props.products)}</h3>
        <button>checkout</button>
      </div>
    </section>
  );
}
