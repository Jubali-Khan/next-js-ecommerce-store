import { css } from '@emotion/react';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

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
      console.log('cookie been set');
    } else {
      // 0. We start by creating the template object for this product
      const orderObjToUpdate = {
        productId: props.productId,
        quantity: 0,
      };

      // 1. If the cookie doesn't already have the order obj for this product, we push it to the cookie
      if (
        !presentCookieArrOObj.find(
          (orderObj) => orderObj.productId === props.productId,
        )
      ) {
        presentCookieArrOObj.push(orderObjToUpdate);
        console.log('IN IF presentCookieArrOObj: ', presentCookieArrOObj);
      }

      // 2. We then update totalOrder to a cookie that we can access and whose order quantity we can manipulate
      setParsedCookie('totalOrder', presentCookieArrOObj);

      // 3.1 split totalOrder into a singular object
      const currentProductObj = presentCookieArrOObj.find(
        (order) => order.productId === props.productId,
      );

      // 3.2 store the remainder of totalOrder in a variable
      const updatedCookie = presentCookieArrOObj.filter(
        (order) => order.productId !== props.productId,
      );

      // 4. update the quantity on the object
      currentProductObj.quantity += Number(quantity);

      // 5. insert object into array of objects
      updatedCookie.push(currentProductObj);

      // 6. update totalOrder with the new value
      setParsedCookie('totalOrder', updatedCookie);
    }
  }
  return (
    <section css={addToCartSectionStyles} id="AddToCartSection">
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
