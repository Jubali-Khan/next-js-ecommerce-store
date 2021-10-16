// import Cookies from 'js-cookie';
// import { useState } from 'react';

// //
// //
// // export function getParsedCookie(key) {
// //   try {
// //     return JSON.parse(Cookies.get(key));
// //   } catch (err) {
// //     return undefined;
// //   }
// // }

// // export function setParsedCookie(key, value) {
// //   Cookies.set(key, JSON.stringify(value));
// // }
// //
// //

// //
// //
// export default function AddToCartSection(props) {
//   const [quantity, setQuantity] = useState(0);
//   console.log('typeof quantity: ', typeof quantity);
//   console.log('quantity: ', quantity);

//   const cookieToAdd = { productId: 1, quantity: 5 };
//   function clickHandler() {
//     console.log('typeof quantity: ', typeof quantity);
//     console.log('quantity: ', quantity);
//     // 1. check if there is a cookie
//     const cookiePresent = getParsedCookie('totalOrder');
//     // console.log('cookiePresent: ', cookiePresent);

//     if (!cookiePresent) {
//       // 2. if there isn't, create one
//       console.log('within if()');
//       setParsedCookie('totalOrder', [cookieToAdd]);
//     } else {
//       // 3. if there is, modify it
//       /* being an array of objects, we first have to find the
//       the right object (probably by Id) and store it in a variable*/
//       const currentProductCookie = cookiePresent.find(
//         (order) => order.productId === cookieToAdd.productId,
//       );
//       // console.log('currentProductCookie: ', currentProductCookie);

//       /* now we remove the order object for this particular product
//        */
//       const updatedCookie = cookiePresent.filter(
//         (order) => order.productId !== cookieToAdd.productId,
//       );
//       // console.log('updatedCookie: ', updatedCookie);

//       /* now we update the currentProductCookie to the new value */
//       // console.log(
//       //   'currentProductCookie.quantity: ',
//       //   currentProductCookie.quantity,
//       // );

//       currentProductCookie.quantity += quantity;
//       // console.log('currentProductCookie: ', currentProductCookie);
//       // console.log(
//       //   'currentProductCookie.quantity: ',
//       //   currentProductCookie.quantity,
//       // );

//       /* now we add the currentProductCookie to the cookie*/
//       updatedCookie.push(currentProductCookie);
//       // console.log('updatedCookie with the modified quantity', updatedCookie);
//       setParsedCookie('totalOrder', updatedCookie);
//     }
//   }
//   return (
//     <section id="AddToCartSection">
//       <select
//         value={quantity}
//         onChange={(event) => {
//           setQuantity(Number(event.currentTarget.value));
//           console.log('event.currentTarget.value: ', event.currentTarget.value);
//           console.log('quantity state var is always delayed: ', quantity);
//         }}
//       >
//         <option value={1}>{1}</option>
//         <option value={2}>{2}</option>
//         <option value={3}>{3}</option>
//       </select>
//       <button onClick={clickHandler}>add to cart</button>
//     </section>
//   );
// }

// /* This section should:
// 1. check if there is a cookie for this product already created (= an totalOrderItem for it)
// 2. if there isn't, create one when 'add to cart' is clicked
// 3. if there is, add info to it when 'add to cart' is clicked
// */
