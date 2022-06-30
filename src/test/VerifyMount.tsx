import { Button, Toast } from 'antd-mobile';
import React, { useState } from 'react';
import useMount from '../components/useMount';
import useUnmount from '../components/useUnmount'

const Child = () => {

  useMount(() => {
    Toast.show('首次渲染')
  });

  useUnmount(() => {
    Toast.show('组件已卸载')
  })

  return <div>你好，我是阿棱</div>
}

const Index = (props) => {
  const [flag, setFlag] = useState(false)

  return (
    <div style={{ padding: 50 }}>
      <Button color='primary' onClick={() => { setFlag(v => !v) }}>切换 {flag ? 'unmount' : 'mount'}</Button>
      {flag && <Child />}
    </div>
  );
}

export default Index;