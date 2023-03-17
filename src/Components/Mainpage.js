import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import axios from "axios";
import { API_URL } from '../config/constants';
import "./Mainpage.css";

dayjs.extend(relativeTime);

const Mainpage = ()=>{
  const [products,setProducts] = useState([]);
  // result 의 형태가 Array(3) 배열로 되어있어서 []로 받음 
  // result의 형태가 객체였으면 객체로 받았을 것임!
  const url = `${API_URL}/products`;
  
  useEffect(()=>{
    console.log('mount');
    axios.get(url).then((result)=>{
      console.log(result)
      const products = result.data.product;
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
              console.log(product.name)
              return(
              <div className="product-card" key={index}>
                <Link className="product-link" to={`/productpage/${product.id}`}>
                  <div className="thumnail-img">
                    <img src={product.imageUrl} className="product-img" alt={product.name}/>
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price} 원</span>
                    <div className="product-footer">
                      <span className="product-seller">
                        <img src="images/icons/avatar.png" className="product-avatar" alt=""/>
                        {product.seller}
                      </span>
                      <span className="product-date">
                        {dayjs(product.createdAt).fromNow()}
                      </span>
                      <br />
                      <span className="product-date">{dayjs(product.createdAt).format('YYYY년 MM월 DD')}</span>
                    </div>
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