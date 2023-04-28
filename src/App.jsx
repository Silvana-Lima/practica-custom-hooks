import './App.css'
import { Count } from './components/Count'
import { CardNew } from './components/cardNew'
import { useGetApi } from './hooks/useGetApi'
import { usePagination } from './hooks/usePagination'

function App() {
  const { page, nextPage, prevPage } = usePagination()
  const { data } = useGetApi(
    `https://rickandmortyapi.com/api/character?page=${page}`
  )

  return (
    <>
      <Count />
      <CardNew data={data} />
      <div>
        <p>Pagina {page} </p>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </>
  )
}

export default App
