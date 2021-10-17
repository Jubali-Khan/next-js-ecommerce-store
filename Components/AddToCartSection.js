import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import cookieUpdater from '../util/CookieUpdater';

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
  // const location = 'AddToCartSection component';
  const [quantity, setQuantity] = useState();
  console.log('quantity state var: ', quantity);

  // This and having quantity () deals with the chrome bug, but as a result the select option is 1 only the first time an option is selected, after that it's whatever was last selected
  useEffect(() => {
    return setQuantity('1');
  }, []);

  function clickHandler() {
    // 1. check if there is a cookie
    const presentCookieArrOObj = getParsedCookie('totalOrder'); // either has a cookie or is undefined

    if (!presentCookieArrOObj) {
      const orderObjTemplate = {
        productId: props.productId,
        quantity: Number(quantity),
      };
      // 2. if there isn't, create one
      setParsedCookie('totalOrder', [orderObjTemplate]);
      props.setTotalOrder('totalOrder', [orderObjTemplate]);
      console.log('cookie been set');
    } else {
      const updatedCookie = cookieUpdater(
        presentCookieArrOObj,
        props.productId,
        quantity,
      );
      console.log('updatedCookie: ', updatedCookie);
      // 6. update totalOrder with the new value
      setParsedCookie('totalOrder', updatedCookie);
      props.setTotalOrder('totalOrder', updatedCookie);
    }
  }
  return (
    <section css={addToCartSectionStyles} id="AddToCartSection">
      {/* an input type=number might be more appropriate in this context */}
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.currentTarget.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      {}
      <button onClick={clickHandler}>add to cart</button>
    </section>
  );
}

/* This section should:
1. check if there is a cookie for this product already created (= an totalOrderItem for it)
2. if there isn't, create one when 'add to cart' is clicked
3. if there is, add info to it when 'add to cart' is clicked
*/

/*
Problems:
1. quantity was integer, it can't be integer and the value of value={} in select
2. there is a bug in Chrome
3.
  */
