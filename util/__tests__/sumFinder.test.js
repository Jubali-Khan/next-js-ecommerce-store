import sumFinder from '../sumFinder';

const cookie = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 3 },
];

const products = [
  {
    id: 1,
    productTitle: 'product 1',
    productDescription: 'product 1 description',
    productPrice: 1000,
    productImage: '/../public/images/tablet.jpg',
  },
  {
    id: 2,
    productTitle: 'product 2',
    productDescription: 'product 2 description',
    productPrice: 2000,
    productImage: '/../public/images/tablet2.jpg',
  },
  {
    id: 3,
    productTitle: 'product 3',
    productDescription: 'product 3 description',
    productPrice: 3000,
    productImage: '/../public/images/tablet3.jpg',
  },
];

test('should find sum of prices of products based on their quantity', () => {
  expect(sumFinder(cookie, products)).toStrictEqual(8000);
});
