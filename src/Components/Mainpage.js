import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./Mainpage.css";

const Mainpage = ()=>{
  const [products,setProducts] = useState([]);
  //result 의 형태가 Array(3) 배열로 되어있어서 []로 받음 
  // result의 형태가 객체였으면 객체로 받았을 것임!
  const url = 'https://b3a98c84-7840-4a6b-8dbf-ec44d79def54.mock.pstmn.io/products/';
  
  useEffect(()=>{
    console.log('mount');
    axios.get(url).then((result)=>{
      const products = result.data.products;
      setProducts(products) 
      // 이거 useEffect 아니면 무한 조회돼서 포스트맨 터짐 ...
    }).catch((error)=>{
      console.log(error)
    });
  },[])

  return(
    <>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
          <h2>Products</h2>
          <div id="product-list">

            {products.map((product,index)=>{
              return(
              <div className="product-card" key={index}>
                <Link className="product-link" to={`/productpage/${product.id}`}>
                  <div className="thumnail-img">
                    <img src={product.imageUrl} className="product-img" alt={product.name}/>
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price} 원</span>
                    <span className="product-seller">
                      <img src="images/icons/avatar.png" className="product-avatar" alt=""/>
                      {product.seller}
                    </span>
                  </div>
                </Link>
              </div>
              )
            })}
          
          </div>
        </div>
      </div>
    </>
  )
}

export default Mainpage;