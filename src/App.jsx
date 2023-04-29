import './App.css'
import { Count } from './components/Count'
import { FormUser } from './components/FormUser'
import { CardNew } from './components/cardNew'

function App() {
  return (
    <>
      <Count />
      <CardNew />
      <FormUser />
      {/* <h2>Ej 1 - Contador</h2>
      <Count /> */}

      <div>
        <h2>Ej 2 - Últimas noticias</h2>
        <CardNew />
      </div>
    </>
  )
}

export default App
