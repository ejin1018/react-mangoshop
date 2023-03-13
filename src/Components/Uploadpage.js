import React from 'react';
import { Button, Checkbox, Form, Input, Divider, InputNumber } from 'antd';
import './Uploadpage.css';


function Uploadpage(){
  const onFinish = (val)=>{
    console.log(val);
  }
  return(
    <div id='upload-container'>
      <Form name='uploadForm' onFinish={onFinish} >
        <Form.Item name='upload' label='상품이미지'>
          <div id='upload-img'>
            <img src='/images/icons/camera.png' alt='카메라 아이콘' />
            <span>상품 이미지를 업로드 해주세요.</span>
          </div>
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>판매자</span>} name="product-seller" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input className='upload-name' placeholder='판매자를 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>상품명</span>} name="product-name" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input className='upload-name' placeholder='상품명을 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>가격</span>} name="product-price" rules={[{type:'number', min:0, required: true, message: '필수 입력 사항입니다'}]}>
          <InputNumber className='upload-name' placeholder='가격을 입력해주세요' min={0} defaultValue={0} />
        </Form.Item>
        <Divider />
        <Form.Item label={<span className='upload-label'>상품설명</span>} name="product-desc" rules={[{required: true, message: '필수 입력 사항입니다'}]}>
          <Input.TextArea className='upload-name' id='product-desc' showCount maxLength={300} placeholder='상품 설명을 입력해주세요' />
        </Form.Item>
        <Divider />
        <Form.Item label="품절" name="product-soldout">
          <Checkbox />
        </Form.Item>
        <Divider />
        <Form.Item>
          <Button type='primary' id='submit-button' htmlType='submit'>상품 등록하기</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Uploadpage;