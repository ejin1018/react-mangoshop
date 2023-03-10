import React from 'react';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Productpage.css";

function Productpage(){
  const navBtn = useNavigate();
  const {id} = useParams();
  const [product,setProduct] = useState(null);

  useEffect(()=>{
    const url = `https://b3a98c84-7840-4a6b-8dbf-ec44d79def54.mock.pstmn.io/products/${id}`;
    
    axios.get(url).then((result)=>{
      setProduct(result.data) 
    }).catch((error)=>{
      console.log(error)
    });
  },[]);
  
  if(product == null){
    return <h1>상품 정보를 받고 있습니다 . . .</h1>
  }

  return(
    <>
      <div id="image-box">
        <img src={`../${product.imageUrl}`} alt={product.desc} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>
      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createAt">2023.03.10</div>
        <div id="description">{product.desc}</div>
      </div>
      <div className='bottom-btns'>
        <button onClick={()=>{navBtn("/")}}>Home</button>
        <button onClick={()=>{navBtn(-1)}} id="back-btn">Back</button>
      </div>
    </>
  )
}

export default Productpage;