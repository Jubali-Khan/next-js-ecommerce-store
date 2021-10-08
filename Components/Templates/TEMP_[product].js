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

const TextAndAddToCartSectionStyles = css`
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

const imageSectionStyles = css`
  margin: auto;
`;

export default function Product(props) {
  return (
    <Layout>
      <main css={mainStyles}>
        <section id="ImageSection" css={imageSectionStyles}>
          <Image src={sampleImage} width="300px" height="300px" />
        </section>
        <section
          id="TextAndAddToCartSection"
          css={TextAndAddToCartSectionStyles}
        >
          <section id="ProductTextSection">
            <h4>Product Title</h4>
            {/* <p>
              Product Description: efemkfmkl enfskjnfr neflsenfknfenfldefemkfmkl
              enfskjnfr neflsenfknfenfldefemkfmkl enfskjnfr
              neflsenfknfenfldefemkfm
            </p> */}
            <p>Product Description:</p>
          </section>
          <section id="AddToCartSection">
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
