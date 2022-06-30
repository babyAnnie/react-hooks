// import VerifyMemo from './test/VerifyMemo'
// import MockMemo from './test/MockMemo'
// import VerifyRef from './test/VerifyRef'
// import VerifyCreation from './test/VerifyCreation'
// import VerifyMount from './test/VerifyMount'
// import VerifyUpdate from './test/VerifyUpdate'
// import VerifyReactive from './test/VerifyReactive'
// import VerifyEventListener from './test/VerifyEventListener'
// import VerifyCountDown from './test/VerifyCountDown'
import VerifyTimer from './test/VerifyTimer'
// import VerifyHover from './test/VerifyHover'

// 一个好用的自定义hooks,一定要配合useMemo、useCallback等 Api 一起使用。
function App() {

  return (
    <div >
      {/* 验证减少性能开销 */}
      {/* <VerifyMemo /> */}
      {/* 验证 useCallback 配合 memo 提升性能 */}
      {/* <MockMemo /> */}
      {/* 验证通过useRef来获取对应元素的相关属性 */}
      {/* <VerifyRef /> */}
      {/* 验证加强版的 useMemo 和 useRef 结合钩子 */}
      {/* <VerifyCreation /> */}
      {/* 验证 useEffect 模拟 componentDidMount 和 componentWillUnmount 功能 */}
      {/* <VerifyMount /> */}
      {/* 验证强制更新 */}
      {/* <VerifyUpdate /> */}
      {/* 验证具备响应式的 useState */}
      {/* <VerifyReactive /> */}
      {/* 验证监听各种事件 */}
      {/* <VerifyEventListener /> */}
      {/* 验证倒计时 */}
      {/* <VerifyCountDown /> */}
      {/* 验证监听 DOM 元素是否有鼠标悬停 */}
      {/* <VerifyHover /> */}
      {/* 验证 useInterval: 每过一段时间内一直执行 */}
      <VerifyTimer />
    </div>
  )
}

export default App
