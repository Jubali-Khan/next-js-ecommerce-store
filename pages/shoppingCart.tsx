import { css } from '@emotion/react';
import { useState } from 'react';
import Layout from '../Components/Layout';
import OrderItem from '../Components/OrderItem';
import OrderSummary from '../Components/OrderSummary';
// import { getParsedCookie } from '../Components/AddToCartSection';
import { getParsedCookie } from '../util/cookies';

// OrderItems should be generated based on the cookies
// So we read the totalOrder, and find out which products are there in which amounts
// We then used this information to dynamically generate OrderItems
// Each of which will be passed a prop

const sectionStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`;

export type Product = {
  id: number;
  productTitle: string;
  productDescription: string;
  productPrice: number;
  productImage: string;
};

type Props = {
  products: Product[];
};

export type CookieOrder = {
  productId: number;
  quantity: number;
};

export default function ShoppingCart(props: Props) {
  const [tempCookie, setTempCookie] = useState<CookieOrder[]>(
    getParsedCookie('totalOrder') || [],
  );
  const [totalOrder, setTotalOrder] = useState(
    tempCookie.filter((order) => order.quantity >= 1) || [],
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
            if (currentProd === undefined) {
              return null;
            }
            return (
              <OrderItem
                key={`OrderItem-${order.productId}`}
                totalOrder={totalOrder}
                setTotalOrder={setTotalOrder}
                order={order}
                // error under product if || {...} from under map() is removed (if you use non-null assertion operator)
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
