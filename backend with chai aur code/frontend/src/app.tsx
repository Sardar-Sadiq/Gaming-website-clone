import axios from 'axios';
import { useEffect, useState } from 'preact/hooks'
import './app.css'

export function App() {

     const [jokes, setJokes] = useState<{ id: number; title: string; content: string }[]>([])

     useEffect(() => {
      axios.get('http://localhost:3000/jokes')
      .then((response) => {
        setJokes(response.data)
      }
    )
      .catch((error) => {
        console.log(error)
      }
    )
     })
  return (
    <>
      <h1>Chai aur code</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      })}
    </>
  )
}
