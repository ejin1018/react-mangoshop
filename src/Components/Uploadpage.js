import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Divider, InputNumber, Upload, message } from 'antd';
import { API_URL } from '../config/constants';
import axios from 'axios';
import './Uploadpage.css';


function Uploadpage(){
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type:'warning',
      content:'필수 입력 사항을 모두 입력해주세요'
    })
  };

  const onFinish = (val)=>{
    console.log(val);
    axios.post(`${API_URL}/products`,{
      name: val.pdname,
      description: val.pddesc,
      price: val.pdprice,
      seller: val.pdseller,
      imageUrl: `${API_URL}/${imageUrl}`
    }).then((result)=>{
      console.log(result);
      navigate('/',{replace:true});
    }).catch((err)=>{
      console.error(err);
      message.error(`에러가 발생했습니다`);
    });
  }
  const [imageUrl,setImageUrl]=useState(null);
  const onChangeImage = function(info){
    if(info.file.status === 'uploading'){
      return;
    } 
    if(info.file.status === 'done'){
      const response = info.file.response;
      const imageUrl = response.imageUrl;
      setImageUrl(imageUrl)
    }else if(info.file.status === 'error'){
      alert('파일 전송에 실패했습니다.')
    }
  }
  return(
    <div id='upload-container'>
      <Form name='uploadForm' onFinish={onFinish} >
        <Form.Item name='upload' valuePropName="image">
          <Upload name='image' action={`${API_URL}/image`} listType='picture' showUploadList={false} onChange={onChangeImage}>
            
            {imageUrl ? (
              <img id='upload-img' src={`${API_URL}/${imageUrl}`} alt='카메라 아이콘' />
            ):(
              <div id='upload-img-placeholder'>
              <img src='/images/icons/camera.png' alt='카메라 아이콘' />
              <span>상품 이미지를 업로드 해주세요.</span>
              </div>
            )}
            
          </Upload>
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>상품명</span>} name="pdname" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input className='upload-name' placeholder='상품명을 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>판매자</span>} name="pdseller" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input className='upload-name' placeholder='판매자를 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>가격</span>} name="pdprice" initialValue={0} rules={[{type:'number', min:0, required: true, message: '필수 입력 사항입니다'}]}>
          <InputNumber className='upload-name' placeholder='가격을 입력해주세요' min={0} />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>상품설명</span>} name="pddesc" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input.TextArea className='upload-name' id='product-desc' showCount maxLength={300} placeholder='상품 설명을 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item>
          {contextHolder}
          <Button type='primary' id='submit-button' htmlType='submit' onClick={info}>상품 등록하기</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Uploadpage;