import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';

const itemStyles = css`
  display: inline;
  border: 1px black solid;
`;

export default function ProductInProductsPage() {
  return (
    <div css={itemStyles}>
      <img src="/public/images/tablet.jpg" alt="tablet" />
    </div>
  );
}
