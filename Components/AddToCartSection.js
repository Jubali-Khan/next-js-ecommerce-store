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
  const [quantity, setQuantity] = useState(1);
  // console.log('typeof quantity: ', typeof quantity);
  // console.log('quantity: ', quantity);

  const cookieToAdd = { productId: props.productId, quantity: quantity };
  console.log(cookieToAdd);
  function clickHandler() {
    // 1. check if there is a cookie
    const cookiePresent = getParsedCookie('totalOrder');

    if (!cookiePresent) {
      // 2. if there isn't, create one
      setParsedCookie('totalOrder', [cookieToAdd]);
    } else {
      // 3. if there is, modify it
      const currentProductCookie = cookiePresent.find(
        (order) => order.productId === cookieToAdd.productId,
      );

      const updatedCookie = cookiePresent.filter(
        (order) => order.productId !== cookieToAdd.productId,
      );

      currentProductCookie.quantity += quantity;

      updatedCookie.push(currentProductCookie);
      setParsedCookie('totalOrder', updatedCookie);
    }
  }
  return (
    <section css={addToCartSectionStyles} id="AddToCartSection">
      <select
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.currentTarget.value));
          // console.log('event.currentTarget.value: ', event.currentTarget.value);
          // console.log('quantity state var is always delayed: ', quantity);
        }}
      >
        <option value={1}>{1}</option>
        <option value={2}>{2}</option>
        <option value={3}>{3}</option>
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
