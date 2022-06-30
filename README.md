# react hooks

- **<font color='#C0FF3E'>useReactive</font>**

useState 封装，具备响应式

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

- **<font color='#C0FF3E'>useTimeout</font>**

setTimeout 的封装 （一段时间内，执行一次）

```js
useTimeout(() => {
  setT(n + 1)
}, 1000)
```

- **<font color='#C0FF3E'>useUnmount</font>**

useEffect 的封装，实现 componentWillUnmount 功能

```js
useUnmount(() => {
  Toast.show('组件已卸载')
})
```

- **<font color='#C0FF3E'>useUpdate</font>**

useCallback 的封装，强制更新组件

```js
const update = useUpdate();
```

- **<font color='#C0FF3E'>useCountDown</font>**

useLatest, useState, useEffect, useMemo的封装，简单控制倒计时的钩子

```js
const [_, formattedRes] = useCountDown({
  targetDate: '2022-12-31 24:00:00',
});
const { days, hours, minutes, seconds, milliseconds } = formattedRes;
```

- **<font color='#C0FF3E'>useCreation</font>**

useMemo 和 useRef 的封装加强版，让这个钩子可以替换这两个钩子。

```js
const nowData = useCreation(() => {}, []);
```

- **<font color='#C0FF3E'>useEventListener</font>**

addEventListener 和 useEffect, useRef 的封装，监听各种事件 （如：监听点击事件、键盘事件、滚动事件等，就是在addEventListener的基础上进行封装）

```js
useEventListener('click', () => setCount(v => v + 1), ref)
```

- **<font color='#C0FF3E'>useHover</font>**

useState 和 useEventListener 的封装，监听 DOM 元素是否有鼠标悬停

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

- **<font color='#C0FF3E'>useInterval</font>**

setInterval 的封装，每过一段时间内一直执行


```js
useInterval(() => {
  setN(n + 1);
}, 1000)
```

- **<font color='#C0FF3E'>useLatest</font>**

useRef 的封装，可以拿到最新值。好处：可以随时确保获取的是最新值，并且也可以解决闭包问题


```js
const fnRef = useLatest(fn)
```

- **<font color='#C0FF3E'>useMount</font>**

useEffect 的封装，实现 componentDidMount 功能。


```js
useMount(() => {
  Toast.show('首次渲染')
});
```

- **<font color='#C0FF3E'>usePow</font>**

useMemo 的封装，平方功能。useMemo（减少性能开销） 第一个参数是函数，第二个参数参数是可变的数组。

```js
const data = usePow([1, 2, 3])
```