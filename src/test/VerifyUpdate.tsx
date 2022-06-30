//示例：
import { Button } from 'antd-mobile';
import useUpdate from '../components/useUpdate';


const Index = (props) => {
  const update = useUpdate();

  return (
    <div style={{ padding: 50 }}>
      <div>时间：{Date.now()}</div>
      <Button color='primary' onClick={update}>更新时间</Button>
    </div>
  );
}

export default Index;