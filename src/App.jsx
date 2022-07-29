import { useGlobalContext } from './context'
import { AppWrapper } from './components/AppWrapper'

const App = () => {
  const { characters, quotes } = useGlobalContext()
  console.log(characters)
  console.log(quotes)
  return (
    <>
      <AppWrapper />
    </>
  )
}

export default App
