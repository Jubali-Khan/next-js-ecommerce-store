import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useState } from 'react';
import Layout from '../Components/Layout';
import OrderItem from '../Components/OrderItem';
import OrderSummary from '../Components/OrderSummary';

// OrderItems should be generated based on the cookies
// So we read the totalOrder, and find out which products are there in which amounts
// We then used this information to dynamically generate OrderItems
// Each of which will be passed a prop

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

const sectionStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`;

export default function ShoppingCart(props) {
  const [totalOrder, setTotalOrder] = useState(
    getParsedCookie('totalOrder') || [],
  );

  return (
    <Layout>
      {totalOrder.length === 0 ? (
        <h3>go add some stuff to the cart</h3>
      ) : (
        <h3>Items added to cart: {totalOrder.length}</h3>
      )}
      <section css={sectionStyles}>
        <div>
          {totalOrder.map((order) => {
            const currentProd = props.products.find(
              (product) => product.id === order.productId,
            );
            return (
              <OrderItem
                key={`OrderItem-${order.productId}`}
                totalOrder={totalOrder}
                setTotalOrder={setTotalOrder}
                order={order}
                product={currentProd}
              />
            );
          })}
        </div>
        <div>
          <OrderSummary totalOrder={totalOrder} products={props.products} />
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const location = 'gSSP in shoppingCart';
  const { getProducts } = await import('../util/database');

  const products = await getProducts();

  console.log(`products in ${location}:`, products);
  return {
    props: {
      products,
    },
  };
}
