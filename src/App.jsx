import './App.css'
import { Count } from './components/Count'
import { FormUser } from './components/FormUser'
import { CardNew } from './components/cardNew'
import { useGetApi } from './hooks/useGetApi'
import { usePagination } from './hooks/usePagination'

function App() {
  const { page, results, nextPage, prevPage, numberOfResults } = usePagination()

  const { data } = useGetApi(
    `https://newsapi.org/v2/top-headlines?country=ar&page=${page}&pageSize=${results}&apiKey=087719249a154ecd89266e64e4b25079`
  )
  return (
    <>
      {/* <h2>Ej 1 - Contador</h2>
      <Count /> */}

      <div>
        <h2>Ej 2 y 3 - Últimas noticias</h2>
        <CardNew data={data} />
        <div>
          <p>Seleccione cuantos elementos desea ver: </p>
          <select name="" id="" onChange={numberOfResults}>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <p>Pagina {page} </p>
          <button onClick={prevPage}>Prev</button>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>

      {/* <h2>Ej 4 - Login</h2>
      <FormUser /> */}
    </>
  )
}

export default App
