import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
* {
  padding: 100px;
  margin: 0;
}

body {
  font-family: 'Roboto', sans-serif;
}

`


function App ({ Component, pageProps }) {
  return (
    <>
    <GlobalStyle/>
    <Component {...pageProps} />
    
    </>
  )
}

export default App