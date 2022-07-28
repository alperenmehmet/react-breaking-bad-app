import { useGlobalContext } from './context'

const App = () => {
  const { characters } = useGlobalContext()
  console.log(characters)
  return <>hello</>
}

export default App
