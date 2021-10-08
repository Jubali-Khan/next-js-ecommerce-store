import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
//
//

//
//
export default function AddToCartSection(props) {
  const cookieToSet = [{ productId: 1, quantity: 5 }];
  function clickHandler() {
    // 1. check if there is a cookie
    const cookiePresent = getParsedCookie('order');
    console.log(cookiePresent);

    // 2. if there isn't, create one
    if (!cookiePresent) {
      console.log('within if()');
      setParsedCookie('order', cookieToSet);
    } else {
      // modify it
    }
    console.log(getParsedCookie('order'));
    // 3. if there is, modify it
  }
  return (
    <section id="AddToCartSection">
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
      </select>
      <button onClick={clickHandler}>add to cart</button>
    </section>
  );
}

/* This section should:
1. check if there is a cookie for this product already created (= an OrderItem for it)
2. if there isn't, create one when 'add to cart' is clicked
3. if there is, add info to it when 'add to cart' is clicked
*/
