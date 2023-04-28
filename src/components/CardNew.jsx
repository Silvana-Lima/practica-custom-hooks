export const CardNew = ({ data }) => {
  console.log(data)
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
