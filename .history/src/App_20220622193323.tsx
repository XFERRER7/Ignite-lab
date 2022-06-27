function App() {

 const {data} = useQuery<{lessons: Lesson []}>(GET_LESSONS);

 console.log(data)

  return (
    <div className="App">
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
