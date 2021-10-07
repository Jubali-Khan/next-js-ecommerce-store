import { css } from '@emotion/react';
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
      <div>Products Page!</div>
      <section css={productsSectionStyles}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
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
