import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Components/Layout';
import sampleImage from '../../public/images/tablet.jpg';

const mainStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
`;

const TextAndCheckoutSectionStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;

  border: 1px black solid;
  border-radius: 2%;
  margin: 20px auto;
  padding: 2% 4%;
`;

export default function Product(props) {
  return (
    <Layout>
      <main css={mainStyles}>
        <section id="ImageSection">
          <Image src={sampleImage} width="300px" height="300px" />
        </section>
        <section id="TextAndCheckoutSection" css={TextAndCheckoutSectionStyles}>
          <section id="ProductTextSection">
            <h4>Product Title</h4>
            <p>Product Description</p>
          </section>
          <section id="CheckoutSection">
            <select>
              <option>1</option>
              <option>1</option>
              <option>1</option>
            </select>
            <button>add to cart</button>
          </section>
        </section>
      </main>
    </Layout>
  );
}
