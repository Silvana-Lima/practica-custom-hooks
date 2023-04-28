import { usePagination } from '../hooks/usePagination'

export const Pagination = () => {
  const { page, nextPage, prevPage } = usePagination()

  return (
    <div>
      <p>Pagina {page} </p>
      <button onClick={prevPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}
