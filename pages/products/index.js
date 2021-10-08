import { css } from '@emotion/react';
import Head from 'next/head';
import Layout from '../../Components/Layout';
import ProductItem from '../../Components/ProductItem';

const productsSectionStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;

  padding: 20px 0px;
`;

export default function Products(props) {
  return (
    <Layout>
      <Head>
        <title>Products Page!</title>
      </Head>
      <div>Products Page!</div>
      <section css={productsSectionStyles}>
        {console.log(props.productsArrayOObj[0].img)}
        <ProductItem product={props.productsArrayOObj[0]} />
        <ProductItem product={props.productsArrayOObj[0]} />
        <ProductItem product={props.productsArrayOObj[0]} />
        <ProductItem product={props.productsArrayOObj[0]} />
        <ProductItem product={props.productsArrayOObj[0]} />
        <ProductItem product={props.productsArrayOObj[0]} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const { productsArrayOObj } = await import('../../util/database');
  console.log(productsArrayOObj);
  return {
    props: {
      productsArrayOObj,
    },
  };
}
