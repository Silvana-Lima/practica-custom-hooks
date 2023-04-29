import { useState } from 'react'

export const usePagination = (value = 1) => {
  const [page, setPage] = useState(value)
  const [results, setResults] = useState(10)

  const nextPage = () => setPage((prev) => prev + 1)
  const prevPage = () => setPage((prev) => prev > 1 && prev - 1)
  const numberOfResults = (e) => {
    console.log(Number(e.target.value))
    setResults(Number(e.target.value))
  }

  return { page, results, nextPage, prevPage, numberOfResults }
}
