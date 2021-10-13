import { css } from '@emotion/react';
import Image from 'next/image';
import sampleImage from '../public/images/tablet.jpg';
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
    console.log('from deleteHandler');
    console.log('props.order.productId: ', props.order.productId);

    const newTotalOrder = props.totalOrder.filter(
      (orderObj) => orderObj.productId !== props.order.productId,
    );
    console.log('newTotalOrder: ', newTotalOrder);
    setParsedCookie('totalOrder', newTotalOrder);
  }
  return (
    <section css={orderItemStyles}>
      <div css={divStyle}>
        <Image src={props.product.productImage} width="120px" height="120px" />
        <section id="ProductTextSection">
          <h4>{props.product.productTitle}</h4>
        </section>
      </div>
      <section id="ButtonsSection" css={ButtonsSectionStyles}>
        <h4>{props.product.productPrice}</h4>
        <select>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </select>
        <br />
        <button onClick={deleteHandler}>delete Item from cart</button>
      </section>
    </section>
  );
}
