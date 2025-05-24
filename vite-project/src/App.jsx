import './App.css'

// Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.

function App() {
   
  const chamar = () => {

    let n_usuario = Number(prompt("digite 1 um numero de 1 a 10: "))
    
    let n_aleatório = Math.ceil(Math.random()*10)


    if(n_usuario === n_aleatório){

      alert('Você acertou o numero!😊' )
    }else{

      alert('Você errou!')
    }
    if(n_usuario > 10 || n_usuario < 1){

      alert('sò são permitidos numeros de 1 a 10!')
    }
  }

  return (
    <div className='container'>
      <h1>Exercicio 1</h1>
      <button onClick={chamar}>adivinhar numero</button>
    </div>
  )
}

export default App
