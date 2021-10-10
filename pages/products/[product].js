import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartSection from '../../Components/AddToCartSection';
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
            <h4>{props.currentProduct.name}</h4>
            {/* <p>
              Product Description: efemkfmkl enfskjnfr neflsenfknfenfldefemkfmkl
              enfskjnfr neflsenfknfenfldefemkfmkl enfskjnfr
              neflsenfknfenfldefemkfm
            </p> */}
            <p>Product Description:</p>
          </section>
          <AddToCartSection productId={props.currentProduct.id} />
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { productsArrayOObj } = await import('../../util/database');
  console.log('productsArrayOObj: ', productsArrayOObj);
  const idFromURL = context.query.product;
  console.log('idFromURL: ', idFromURL);
  const currentProduct = productsArrayOObj.find(
    (productObj) => productObj.id === Number(idFromURL),
  );
  console.log('currentProduct: ', currentProduct);
  console.log('currentProduct.id: ', currentProduct.id);
  console.log('typeof currentProduct.id: ', typeof currentProduct.id);
  return {
    props: {
      currentProduct,
    }, // will be passed to the page component as props
  };
}
