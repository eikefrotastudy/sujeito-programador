import { useState } from "react";

function App() {
  const [aluno, setAluno] = useState("Eike");

  function mudarNome(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Bem-vindo ao meu projeto!</h1>
      <h2>Aluno: {aluno}</h2>
      <button onClick={ () => mudarNome("Eike Frota") }>
        Alterar Nome
      </button>
    </div>
  );
}

export default App;
