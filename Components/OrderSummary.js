import { css } from '@emotion/react';
import { getParsedCookie } from './AddToCartSection';

// Problem: cookie is for some reason undefined
function sumFinder(cookie, products) {
  let sum = 0;

  cookie.forEach((order) => {
    const currentProd = products.find(
      (product) => product.id === order.productId,
    );
    // console.log('currentProd: ', currentProd);
    const currentProdPrice = currentProd.productPrice;
    // console.log('currentProdPrice: ', currentProdPrice);
    sum += order.quantity * currentProdPrice;
    // console.log('sum: ', sum);
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
  const totalOrder = getParsedCookie('totalOrder') || [];
  return (
    <section id="OrderSummarySection" css={orderSummarySectionStyles}>
      <div>
        <h3>Order Summary:</h3>
        <h3>
          {props.products.map((prod) => (
            <li key={`prod-${prod.id}`}>{prod.productTitle}</li>
          ))}
        </h3>
      </div>
      <div>
        <h3>Sum: {sumFinder(totalOrder, props.products)}</h3>
        <button>checkout</button>
      </div>
    </section>
  );
}
