import { useState } from "react";

function App() {
  const [nome, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState({});

  function handleRegister(event) {
    event.preventDefault();

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })

  }

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleRegister}>
        <label>Nome</label><br/>
        <input placeholder="Digite seu nome:" 
        value={nome}
        onChange={event => setName(event.target.value)}/><br/>
        
        <label>Idade</label><br/>
        <input placeholder="Digite sua idade:" 
        value={idade}
        onChange={event => setIdade(event.target.value)}/><br/>
        
        <label>Email</label><br/>
        <input placeholder="Digite seu email:" 
        value={email}
        onChange={event => setEmail(event.target.value)}/><br/>
        
        <button type="submit">Enviar</button>
      </form>
      <br/>
      <br/>

      <div>
        <span>Nome: {user.nome}</span><br/>
        <span>Idade: {user.idade} </span><br/>
        <span>Email: {user.email} </span><br/>
      </div>

    </div>
  );
}

export default App;
