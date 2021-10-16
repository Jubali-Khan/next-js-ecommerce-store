import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import { setParsedCookie } from './AddToCartSection';

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

  //
  //
  const [display, setDisplay] = useState('none');
  function displayHandler() {
    if (display === 'none') {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }
  const inputStyles = css`
    display: ${display};
  `;
  //
  //

  const [newQuantity, setNewQuantity] = useState('1');

  function updateHandler() {
    const newTotalOrder = props.totalOrder.filter(
      (orderElement) => orderElement.productId !== props.order.productId,
    );
    console.log('newTotalOrder: ', newTotalOrder);

    const modifiedOrder = props.order;
    modifiedOrder.quantity = Number(newQuantity);
    console.log('modifiedOrder: ', modifiedOrder);

    newTotalOrder.push(modifiedOrder);
    console.log('newTotalOrder with modifiedOrder: ', newTotalOrder);

    setParsedCookie('totalOrder', newTotalOrder);
    props.setTotalOrder(newTotalOrder);
  }

  return (
    <section css={orderItemStyles}>
      <div css={divStyle}>
        {/* add link around the image */}
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
        <br />
        <br />
        <button onClick={displayHandler}>Change quantity</button>

        <section css={inputStyles} id="QuantityUpdateSection">
          <input
            type="number"
            min="1"
            value={newQuantity}
            onChange={(e) => setNewQuantity(e.currentTarget.value)}
          />
          <button onClick={updateHandler}>update</button>
        </section>
      </section>
    </section>
  );
}
