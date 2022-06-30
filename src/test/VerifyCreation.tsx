import React, { useState } from 'react';
import { Button } from 'antd-mobile';
import useCreation from '../components/useCreation';

const Index = () => {
  const [_, setFlag] = useState(false)

  const getNowData = () => {
    return Math.random()
  }

  const nowData = useCreation(() => getNowData(), []);

  return (
    <div style={{ padding: 50 }}>
      <div>正常的函数： {getNowData()}</div>
      <div>useCreation包裹后的： {nowData}</div>
      <Button color='primary' onClick={() => { setFlag((v: any) => !v) }}> 渲染</Button>
    </div>
  )
}

export default Index;