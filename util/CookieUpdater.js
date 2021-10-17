import { setParsedCookie } from '../Components/AddToCartSection';

// presenCookieArrOObj, props.productId, quantity (statevar)
export default function cookieUpdater(cookie, productIdPar, quantitySV) {
  // This section accounts for when we are dealing with a new product, not the same one
  const orderObjToUpdate = {
    productId: productIdPar,
    quantity: 0,
  };

  if (!cookie.find((orderObj) => orderObj.productId === productIdPar)) {
    cookie.push(orderObjToUpdate);
  }

  setParsedCookie('totalOrder', cookie);

  const currentProductObj = cookie.find(
    (order) => order.productId === productIdPar,
  );

  const updatedCookie = cookie.filter(
    (order) => order.productId !== productIdPar,
  );

  currentProductObj.quantity = Number(quantitySV);

  updatedCookie.push(currentProductObj);
  return updatedCookie;
}
