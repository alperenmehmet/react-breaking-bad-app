import { useGlobalContext } from './context'

const App = () => {
  const { characters, quotes } = useGlobalContext()
  console.log(characters)
  console.log(quotes)
  return <>hello</>
}

export default App
