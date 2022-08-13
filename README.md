# React Hooks API

리액트의 다양한 Hooks API에 대해 알아봅니다.

# 1. useContext 사용방법

1. crateConteext() 생성해주기

```
import { createContext  } from "react";

export const ColorContext = createContext(null);
```


2. 최상위 컴포넌트에서 Provider 속성을 이용해 태그로 감싸준다.

> value={}에 전달한 Props를 넘어준다.

```
<ColorContext.Provider value={{isDark, setIsDark}}>
    <Page isDark={isDark} setIsDark={setIsDark}></Page>
</ColorContext.Provider>
```

Context로 감싸준 하위 태그들은 이제 props를 사용하지 않고도 value로 전달한 isDark와 setIsDark에 접근할 수 있게 된다.

3. 하위 컴포넌트에서 Context.value에 접근한다.

접근을 위해서는 useContext Hooks API를 사용한다.

```
const colorData = useContext(ColorContext);
```

colorData를 console.log로 찍어보면 Object가 출력되는데, 메인페이지에서 넘겨주었던 value값이 그대로 저장되어 있다.

```
{isDark: false, setIsDark: ƒ}
isDark: false
setIsDark: ƒ ()
[[Prototype]]: Object
```
<br><br>

# 2. useReducer 사용방법

## useReducer 구성요소
 - reducer : action에 따라 state를 처리하는 로직을 담은 함수
 - action : {type:... , payload:...} 형식으로 구성된 요구사항
 - dispatch : reducer 함수를 실행하는 함수, action을 매개변수로 받는다.
 - useReduer : reducer 함수와 초기 state값을 받아 state와 dispatch 함수를 반환한다.

## 사용형식

```
const [state, dispatch] = useReducer(reducer, initialState)
```

### reducer 함수

```
const reducer = ((state, action)) => {}

const ACTION_TYPES = {
    ...
}
```

### dispatch 함수
```
<Button onClick={()=>{
    dispatch({type:'특정액션', payload:{'특정 값'}});
}}> 추가 </Button>
```

### 참고사항

useReducer로 생산한 dispatch 함수를 하위 컴포넌트에서 사용하기 위해서는 state drilling으로 내려줘야 함. 

```
<하위컴포넌트 dispatch={dispatch} /> 
```

useReducer + useContext = Redux !