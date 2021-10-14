import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartSection from '../../Components/AddToCartSection';
import Layout from '../../Components/Layout';

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

const titleStyles = css`
  display: inline;
  padding: 1%;
`;
const priceStyles = css`
  display: inline;
  padding: 1%;
`;

export default function Product(props) {
  console.log('typeof props.currentProduct: ', typeof props.currentProduct);
  if (props.currentProduct !== null) {
    return (
      <Layout>
        <main css={mainStyles}>
          <section id="ImageSection" css={imageSectionStyles}>
            <Image
              src={props.currentProduct.productImage}
              width="300px"
              height="300px"
            />
          </section>
          <section
            id="TextAndAddToCartSection"
            css={TextAndAddToCartSectionStyles}
          >
            <section id="ProductTextSection">
              <h4 css={titleStyles}>{props.currentProduct.productTitle}</h4>
              <h4 css={priceStyles}>{props.currentProduct.productPrice}</h4>
              {/* <p>
              Product Description: efemkfmkl enfskjnfr neflsenfknfenfldefemkfmkl
              enfskjnfr neflsenfknfenfldefemkfmkl enfskjnfr
              neflsenfknfenfldefemkfm
            </p> */}
              <p>{props.currentProduct.productDescription}</p>
            </section>
            <AddToCartSection productId={props.currentProduct.id} />
          </section>
        </main>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Sorry, this product doesn't exist!</h1>
        <h3>
          Check out our{' '}
          <Link href="/products/">
            <a>products</a>
          </Link>
          page
        </h3>
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {
  const location = 'gSSP in products/[product].js';
  const { getProduct } = await import('../../util/database');

  const idFromURL = context.query.product;

  const currentProduct = await getProduct(idFromURL);

  console.log(`typeof currentProduct in ${location}:`, typeof currentProduct);
  console.log(`currentProduct in ${location}:`, currentProduct);

  return {
    props: {
      currentProduct: currentProduct || null,
    },
  };
}
