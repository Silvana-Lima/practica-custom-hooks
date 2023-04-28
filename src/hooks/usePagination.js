import { useState } from 'react'

export const usePagination = (value = 1) => {
  const [page, setPage] = useState(value)
  //const [elements, setElements] = useState()

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev > 1 && prev - 1)

  return { page, nextPage, prevPage }
}
