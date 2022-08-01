import styled from 'styled-components'

const QuoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5rem 0;
  background: #e5e5e5;
  padding: 0.75rem 1rem;
  border-radius: 10px;
`

const Quote = ({ quote, author }) => {
  return (
    <QuoteContainer>
      <p>{quote}</p>
      <h3>{author}</h3>
    </QuoteContainer>
  )
}

export default Quote
