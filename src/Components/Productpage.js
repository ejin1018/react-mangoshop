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
    const url = `http://localhost:8080/products/${id}`;
    
    axios.get(url).then((result)=>{
      console.log(result);
      setProduct(result.data.product)
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
        <div id="createAt">{product.createdAt}</div>
        <div id="description">{product.description}</div>
      </div>
      <div className='bottom-btns'>
        <button onClick={()=>{navBtn("/")}}>Home</button>
        <button onClick={()=>{navBtn(-1)}} id="back-btn">Back</button>
      </div>
    </>
  )
}

export default Productpage;