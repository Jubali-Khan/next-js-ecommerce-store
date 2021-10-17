import cookieUpdater from '../CookieUpdater';

const productId = 2;
const newQuantity = 5;
const cookieSample = [{ productId: 2, quantity: 3 }];

const expected = [{ productId: 2, quantity: 5 }];

test('should update quantity from 3 to 5', () => {
  expect(cookieUpdater(cookieSample, productId, newQuantity)).toEqual(
    expect.arrayContaining(expected),
  );
});
