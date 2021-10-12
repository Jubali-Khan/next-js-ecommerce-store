import Layout from '../Components/Layout';
import OrderItem from '../Components/OrderItem';
import OrderSummary from '../Components/OrderSummary';

// OrderItems should be generated based on the cookies
// So we read the cookie, and find out which products are there in which amounts
// We then used this information to dynamically generate OrderItems
// Each of which will be passed a prop

export default function ShoppingCart(props) {
  return (
    <Layout>
      <h3>Items added to cart:</h3>
      <OrderItem />
      <OrderSummary />
    </Layout>
  );
}
