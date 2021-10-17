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

type Props = {
  products: {
    id: number;
    productTitle: string;
    productDescription: string;
    productPrice: number;
    productImage: string;
  }[];
};

export default function Products(props: Props) {
  return (
    <Layout>
      <Head>
        <title>Products Page!</title>
      </Head>
      <div>Products Page!</div>
      <section css={productsSectionStyles}>
        {props.products.map((productObj) => (
          <ProductItem
            key={`ProductItem-id${productObj.id}`}
            product={productObj}
          />
        ))}
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const location = 'gSSP in products/index';
  const { getProducts } = await import('../../util/database');

  const products = await getProducts();

  console.log(`products in ${location}:`, products);
  return {
    props: {
      products,
    },
  };
}
