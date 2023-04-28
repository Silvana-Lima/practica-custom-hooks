import { useGetApi } from '../hooks/useGetApi'

export const CardNew = () => {
  const { data } = useGetApi('https://rickandmortyapi.com/api/character')

  return (
    <div>
      {data &&
        data.results.map((d) => (
          <div key={d.id}>
            <h3>{d.name} </h3>
            <p>{d.status} </p>
          </div>
        ))}
    </div>
  )
}
