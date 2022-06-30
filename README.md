# react hooks

## :bulb: useReactive

`useState` 封装，使变量具备响应式。

```js
const state = useReactive<any>({
  count: 0,
  name: '阿棱',
  flag: true,
  arr: [],
  bugs: ['阿棱', 'react', 'hook'],
  addBug(bug: string) {
    this.bugs.push(bug);
  },
  get bugsCount() {
    return this.bugs.length;
  },
})
```

## :bulb: useTimeout

`setTimeout` 的封装，在一段时间内执行一次函数。

```js
useTimeout(() => {
  setT(n + 1)
}, 1000)
```

## :bulb: useUnmount

`useEffect` 的封装，实现 `componentWillUnmount` 功能。

```js
useUnmount(() => {
  Toast.show('组件已卸载')
})
```

## :bulb: useUpdate

`useCallback` 的封装，使组件强制更新。

```js
const update = useUpdate();
```

## :bulb: useCountDown

`useLatest`, `useState`, `useEffect`, `useMemo` 的封装，可以简单控制倒计时。

```js
const [_, formattedRes] = useCountDown({
  targetDate: '2022-12-31 24:00:00',
});
const { days, hours, minutes, seconds, milliseconds } = formattedRes;
```

## :bulb: useCreation

`useMemo` 和 `useRef` 的封装加强版，可以替换这两个钩子。

- `useMemo` 的值不一定是最新的值，但 `useCreation` 可以保证拿到的值一定是最新的值
- 对于复杂常量的创建， `useRef` 容易出现潜在的的性能隐患，但 `useCreation` 可以避免

```js
const nowData = useCreation(() => {}, []);
```

## :bulb: useEventListener

`addEventListener` 和 `useEffect`, `useRef` 的封装，可以监听各种事件 （如：监听点击事件、键盘事件、滚动事件等）。

```js
useEventListener('click', () => setCount(v => v + 1), ref)
```

## :bulb: useHover

`useState` 和 `useEventListener` 的封装，可以监听 DOM 元素是否有鼠标悬停。

```js
const h = useHover(r, {
  onEnter: () => {
    console.log('onEnter');
  },
  onLeave: () => {
    console.log('onLeave');
  },
})
```

## :bulb: useInterval

`setInterval` 的封装，每过一段时间执行一次函数。


```js
useInterval(() => {
  setN(n + 1);
}, 1000)
```

## :bulb: useLatest

`useRef` 的封装，可以拿到最新值。
<br/>

好处：可以随时确保获取的是最新值，并且也可以解决闭包问题。


```js
const fnRef = useLatest(fn)
```

## :bulb: useMount

`useEffect` 的封装，实现 `componentDidMount` 功能。

```js
useMount(() => {
  Toast.show('首次渲染')
});
```

## :bulb: usePow

`useMemo` 的封装，实现平方功能。 
<br/>

`useMemo` （减少性能开销） 第一个参数是函数，第二个参数参数是可变的数组。

```js
const data = usePow([1, 2, 3])
```