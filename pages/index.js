import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../Components/Layout';

const homeStyles = css`
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Home() {
  return (
    <Layout>
      <div css={homeStyles}>Home</div>
    </Layout>
  );
}
