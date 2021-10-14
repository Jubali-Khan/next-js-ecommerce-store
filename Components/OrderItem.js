import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import sampleImage from '../public/images/tablet.jpg';
import { getParsedCookie, setParsedCookie } from './AddToCartSection';

const orderItemStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

  margin: 1%;
  border: 1px solid black;
  border-radius: 10px;
`;

const ButtonsSectionStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  align-content: stretch;
`;

const divStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;

  margin: 1%;
  border: 1px solid black;
`;

export default function OrderItem(props) {
  function deleteHandler() {
    const newTotalOrder = props.totalOrder.filter(
      (orderObj) => orderObj.productId !== props.order.productId,
    );
    setParsedCookie('totalOrder', newTotalOrder);
    props.setTotalOrder(newTotalOrder);
  }

  // const [display, setDisplay] = useState('none');
  // function updateHandler() {
  //   if (display === 'none') {
  //     setDisplay('block');
  //   } else {
  //     setDisplay('none');
  //   }
  // }
  // const h2Styles = css`
  //   display: ${display};
  // `;

  // const [newQuantity, setNewQuantity] = useState('1');

  return (
    <section css={orderItemStyles}>
      <div css={divStyle}>
        <Image src={props.product.productImage} width="120px" height="120px" />
        <section id="ProductTextSection">
          <h4>{props.product.productTitle}</h4>
        </section>
      </div>
      <section id="ButtonsSection" css={ButtonsSectionStyles}>
        <h4>{props.order.quantity}</h4>
        <h4>{props.product.productPrice}</h4>
        <br />
        <button onClick={deleteHandler}>delete Item from cart</button>
        {/* <button onClick={updateHandler}>Change quantity</button>

        <h2 css={h2Styles}>UPDATEME</h2>
        <input
          type="number"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.currentTarget.value)}
        />
        {newQuantity} */}
        {/* <button onClick={}>update</button> */}

        {/* <button onClick={() => deleteHandler2(props.order.productId)}>
          delete Item from cart
        </button> // Why does the () => have a different effect than just deleteHandler2(props.order.productId)?*/}
      </section>
    </section>
  );
}
