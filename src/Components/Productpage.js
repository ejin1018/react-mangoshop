import React from 'react';
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Productpage.css";
import { API_URL } from '../config/constants';
import { Button,message } from 'antd';

function Productpage(){
  const navBtn = useNavigate();
  const {id} = useParams();
  const [product,setProduct] = useState(null);

  const getProduct = ()=>{
    axios.get(`${API_URL}/products/${id}`).then((result)=>{
      console.log(result);
      setProduct(result.data.product)
    }).catch((error)=>{
      console.log(error)
    });
  }
  
  useEffect(()=>{
    getProduct();
  },[]);
  
  if(product == null){
    return <h1>상품 정보를 받고 있습니다 . . .</h1>
  }
  
  const onClickPurchase = ()=>{
    axios.post(`${API_URL}/purchase/${id}`).then((result)=>{
      getProduct();
      message.info('결제가 완료되었습니다');
      navBtn('/',{replace:true});
    }).catch((error)=>{
      console.log(error)
    });
  }

  return(
    <>
      <div id="image-box">
        <img src={`${product.imageUrl}`} alt={product.desc} />
      </div>
      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price} 원</div>
        <div id="profile-box">
          <img src="/images/icons/avatar.png" alt={product.seller} />
          <span className="product-seller">{product.seller}</span>
        </div>
        <div id="createAt">{product.createdAt}</div>
        <div id="description">{product.description}</div>
      </div>
      <div className='bottom-btns'>
        <Button type='primary' size='large' className='payment' onClick={onClickPurchase}>결제하기</Button>
        <br />
        <button onClick={()=>{navBtn("/")}}>Home</button>
        <button onClick={()=>{navBtn(-1)}} id="back-btn">Back</button>
      </div>
    </>
  )
}

export default Productpage;