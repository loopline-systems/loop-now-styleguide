The colors below are all the colors used by components.
They are available with the help of the ThemeWrapper. 

To use the theme in **styled-components** you can access them 
through the props. 

```html
  const styledComponent = styled.span`
    ...
    color: ${({ theme }) => theme.yourcolor};
    ...
  `  
```

```js
  <Colors/>
```
