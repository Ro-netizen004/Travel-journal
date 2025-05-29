import { Header } from './components/Header'
import { Entry } from './components/Entry'
import data from './data'

const jsxelement = data.map((item)=> (
  <Entry key={item.id} 
  item={item}
  />
))

function App() {

  return (
    <>
      <Header />
      {jsxelement}
    </>
  )
}

export default App
