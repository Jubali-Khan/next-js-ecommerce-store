export default function sumFinder(cookie, products) {
  let sum = 0;

  cookie.forEach((order) => {
    const currentProd = products.find(
      (product) => product.id === order.productId,
    );
    const currentProdPrice = currentProd.productPrice;
    sum += order.quantity * currentProdPrice;
  });
  return sum;
}
