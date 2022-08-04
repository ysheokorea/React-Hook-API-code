# useContext 사용방법

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