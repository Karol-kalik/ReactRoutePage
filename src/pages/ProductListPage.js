import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductListPage.css';
const products = ["Buty", "Skarpetki", "Sznurówki"];
const ProductListPage = () => {
  const product = products.map(item => (
    <li key={item}>
      <Link to={`/product/${item}`}>{item} </Link>
      </li>
  ))
  return (
    <div className="products">
      <h1>Lista produktów</h1>
      <ul>
        {product}
      </ul>
    </div>
   );
}

export default ProductListPage;