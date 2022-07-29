import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedLayout from '../pages/SharedLayout'
import Home from '../pages/Home'
import Characters from '../pages/Characters'
import Quotes from '../pages/Quotes'

const GlobalStyles = createGlobalStyle`
  :root {
    --transition: all 0.3s linear;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.5;
    font-size: 0.875rem;
  }
`

const Container = styled.div`
  width: 85vw;
  margin: 0 auto;
  max-width: 1170px;

  @media screen and (min-width: 992px) {
    width: 95vw;
  }
`

export const AppWrapper = () => {
  return (
    <Container>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/quotes" element={<Quotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}
