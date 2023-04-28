const obtenrApi = () => {
  // useEffect(() => {
  //   const getNews = async () = {
  //      const { data } = await axios.get('https://newsapi.org/v2/top-headlines?country=ar&apiKey=087719249a154ecd89266e64e4b25079');
  //      setData(data)
  //      console.log(data.articles)
  //   }

  //   getNews()

  // }, [])

  // //  return { data }

  fetch(
    `https://newsapi.org/v2/top-headlines?country=ar&apiKey=087719249a154ecd89266e64e4b25079`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
    })
    .catch((error) => console.log(error))
    .finally(() => console.log('termino'))

  console.log('holaaaaaamnjbhbjbjhbhbhbhj')
}

obtenrApi()
