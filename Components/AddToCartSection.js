import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useState } from 'react';

const addToCartSectionStyles = css`
  border: 1px solid black;
  padding: 5%;
`;

//
//
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
  const location = 'AddToCartSection component';
  const [quantity, setQuantity] = useState(1);
  console.log('quantity state var: ', quantity);

  const cookieToAdd = { productId: props.productId, quantity: quantity };

  function clickHandler() {
    // 1. check if there is a cookie
    const cookiePresent = getParsedCookie('totalOrder');

    if (!cookiePresent) {
      // 2. if there isn't, create one
      setParsedCookie('totalOrder', [cookieToAdd]);
      console.log('cookie been set');
    } else {
      // 3. if there is, modify it by first adding this products order object
      setParsedCookie('totalOrder', cookiePresent.push(cookieToAdd));

      const currentProductCookie = cookiePresent.find(
        (order) => order.productId === cookieToAdd.productId,
      );
      console.log('currentProductCookie: ', currentProductCookie);

      const updatedCookie = cookiePresent.filter(
        (order) => order.productId !== cookieToAdd.productId,
      );

      console.log(
        `currentProductCookie.quantity: ${currentProductCookie.quantity} \n quantity: ${quantity}`,
      );
      currentProductCookie.quantity += quantity;

      updatedCookie.push(currentProductCookie);
      console.log('updatedCookie modified: ', updatedCookie);

      setParsedCookie('totalOrder', updatedCookie);
      console.log('totalOrder cookie: ', getParsedCookie('totalOrder'));
    }
  }
  return (
    <section css={addToCartSectionStyles} id="AddToCartSection">
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.currentTarget.value))}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button onClick={clickHandler}>add to cart</button>
    </section>
  );
}

/* This section should:
1. check if there is a cookie for this product already created (= an totalOrderItem for it)
2. if there isn't, create one when 'add to cart' is clicked
3. if there is, add info to it when 'add to cart' is clicked
*/
