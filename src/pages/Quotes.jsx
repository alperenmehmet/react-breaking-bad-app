import { useGlobalContext } from '../context'
import Quote from '../components/Quote'

const Quotes = () => {
  const { quotes } = useGlobalContext()

  return (
    <div>
      {quotes.map((item) => {
        return <Quote key={item.quote_id} {...item} />
      })}
    </div>
  )
}

export default Quotes
