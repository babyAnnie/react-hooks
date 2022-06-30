import { useState } from 'react';
import useCountDown from '../components/useCountDown'
import { Button, Toast } from 'antd-mobile';

const Index = (props) => {

  const [_, formattedRes] = useCountDown({
    targetDate: '2022-12-31 24:00:00',
  });

  const { days, hours, minutes, seconds, milliseconds } = formattedRes;

  const [count, setCount] = useState();

  const [countdown] = useCountDown({
    targetDate: count,
    onEnd: () => {
      Toast.show('结束')
    },
  });

  return (
    <div style={{ padding: 20 }}>
      <div> 距离 2022-12-31 24:00:00 还有 {days} 天 {hours} 时 {minutes} 分 {seconds} 秒 {milliseconds} 毫秒</div>
      <div>
        <p style={{ marginTop: 12 }}>动态变化：</p>
        <Button color='primary' disabled={countdown !== 0} onClick={() => setCount(Date.now() + 3000)}>
          {countdown === 0 ? '开始' : `还有 ${Math.round(countdown / 1000)}s`}
        </Button>
        <Button style={{ marginLeft: 8 }} onClick={() => setCount(undefined)}>停止</Button>
      </div>
    </div>
  );
}

export default Index;