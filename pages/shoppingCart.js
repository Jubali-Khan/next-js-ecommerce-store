import Cookies from 'js-cookie';
import Layout from '../Components/Layout';
import OrderItem from '../Components/OrderItem';
import OrderSummary from '../Components/OrderSummary';

// OrderItems should be generated based on the cookies
// So we read the cookie, and find out which products are there in which amounts
// We then used this information to dynamically generate OrderItems
// Each of which will be passed a prop

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

const totalOrder = getParsedCookie('totalOrder') || [];

export default function ShoppingCart(props) {
  return (
    <Layout>
      {totalOrder.length === 0 ? (
        <h3>go add some stuff to the cart</h3>
      ) : (
        <h3>Items added to cart: {totalOrder.length}</h3>
      )}
      <OrderItem />
      <OrderSummary products={props.products} />
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
