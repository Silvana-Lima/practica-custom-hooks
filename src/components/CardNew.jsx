export const CardNew = ({ data }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
      {data &&
        data.articles.map((a) => (
          <div
            key={a.id}
            style={{
              width: '250px',
              padding: '10px',
              borderStyle: 'solid',
              borderRadius: '10px',
            }}
          >
            <h3>{a.title} </h3>
            <p>{a.author} </p>
          </div>
        ))}
    </div>
  )
}
