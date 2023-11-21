import { useEffect, useState } from "react";
import styles from './title.module.css'

export default function App () {

  const [tarefas, setTarefas] = useState([])

  useEffect(() => {

    async function buscarDados () {
      fetch ('http://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(res => setTarefas(res))
    }

    buscarDados()
  }, [])

  return (
    <div>
      <h1 className={styles.titulo}>Deploy na Vercel</h1>
      <div>
        {tarefas.map((tarefas) => {
          return (
            <div className="task-item" key = {tarefas.id}>
              <p> {tarefas.id} - {tarefas.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}