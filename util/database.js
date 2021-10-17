import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import Cookies from 'js-cookie';
import postgres from 'postgres';

// const CryptoJS = require('crypto-js');

// const data = [{ id: 1 }, { id: 2 }];

// // Encrypt
// const ciphertext = CryptoJS.AES.encrypt(
//   JSON.stringify(data),
//   'secret key 123',
// ).toString();

// // Decrypt
// const bytes = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
// const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

// console.log(decryptedData); // [{id: 1}, {id: 2}]

dotenvSafe.config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    // When we're in development, make sure that we connect only
    // once to the database
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

//
// all products
export async function getProducts() {
  const products = await sql`
    SELECT
      *
    FROM
      products
  `;
  console.log('products from database: ', products);
  // What do we return?
  return products.map((product) => camelcaseKeys(product));
}

//
// 1 product
export async function getProduct(id) {
  const product = await sql`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id};
  `;
  console.log('product from database: ', product[0]);
  // What do we return?
  return camelcaseKeys(product[0]);
}

export function getParsedCookie(key) {
  try {
    return JSON.parse(Cookies.get(key));
  } catch (err) {
    return undefined;
  }
}

export function setParsedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}

export const productsArrayOObj = [
  {
    id: 1,
    name: 'product 1',
    desc: 'product 1 description',
    price: 1000,
    img: '/../public/images/tablet.jpg',
  },
  {
    id: 2,
    name: 'product 2',
    desc: 'product 2 description',
    price: 2000,
    img: '/../public/images/tablet2.jpg',
  },
  {
    id: 3,
    name: 'product 3',
    desc: 'product 3 description',
    price: 3000,
    img: '/../public/images/tablet3.jpg',
  },
];
