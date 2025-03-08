import { useState } from "react";

function App() {
  const [input, setInput] = useState('')
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar ReactJS'
  ]);

  function handleRegister(event) {
    event.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastro de Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Nome da tarefa</label><br/>
        <input placeholder="Digite sua tarefa:" 
        value={input}
        onChange={event => setName(event.target.value)}
        /><br/>
        <button type="submit">Enviar</button>
      </form>
      <br/>
      <br/>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
