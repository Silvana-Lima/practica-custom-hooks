// mi key = 087719249a154ecd89266e64e4b25079

import axios from 'axios'
import { useEffect, useState } from 'react'
export const useGetApi = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => {
        setData(data)
      })
      .catch((error) => console.log(error))
  }, [url])

  return { data }
}
