import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Mainpage.css";

const Mainpage = ()=>{
  const [products,setProducts] = useState([]);
  //result 의 형태가 Array(3) 배열로 되어있어서 []로 받음 
  // result의 형태가 객체였으면 객체로 받았을 것임!
  const url = 'https://b3a98c84-7840-4a6b-8dbf-ec44d79def54.mock.pstmn.io/products';
  
  useEffect(()=>{
    console.log('mount');
    axios.get(url).then((result)=>{
      const products = result.data.products;
      setProducts(products) 
      // 이거 useEffect 아니면 무한 조회돼서 포스트맨 터짐 ...
      console.log(products)
    }).catch((error)=>{
      console.log(error)
    });

    console.log(products);
  },[])

  return(
    <>
      <div id="header">
        <div id="header-area">
          <h1>
            <img src="images/icons/logo.png" alt="로고" />
          </h1>
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
          <h2>Products</h2>
          <div id="product-list">

            {products.map((product,index)=>{
              return(
              <div className="product-card" key={index}>
                <div className="thumnail-img">
                  <img src={product.imageUrl} className="product-img" alt=""/>
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price} 원</span>
                  <span className="product-seller">
                    <img src="images/icons/avatar.png" className="product-avatar" alt=""/>
                    {product.seller}
                  </span>
                </div>
              </div>
              )
            })}
          
          </div>
        </div>
      </div>
      <div id="footer">
        <a href="#">회사소개</a>
        <a href="#">이용약관</a>
        <a href="#">통신판매업신고번호: 123-1234</a>
        <a href="#">사업자등록번호: 456-56-4564566</a>
        <a href="#">고객센터: 789-78978</a>
      </div>
    </>
  )
}

export default Mainpage;