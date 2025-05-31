import { useState } from "react";

function Ex_um() {
  const [input_marujos, setInput_marujos] = useState();
  const [eventos, setEventos] = useState();
  const [mensagem, setMensagem] = useState();
  const validar_viajem = () => {
    if (input_marujos >= 10 || eventos > 0) {
      setMensagem("Pode seguir viajem!");
    } else {
      setMensagem("Não pode viajar");
    }
  };

  return (
    <>
      <div className="container_geral"> 
        <h2>Hello capitain 🪝🪿</h2>
        <div className="div_input_label">
          <input
            type="text"
            value={input_marujos}
            onChange={(event) => setInput_marujos(event.target.value)}
            placeholder="Marujos"
          />
        </div>
        <div className="div_input_label">
         
          <input
            type="text"
            value={eventos}
            onChange={(event) => setEventos(event.target.value)}
            placeholder="Eventos"
          />
        </div>
        <button onClick={validar_viajem}>Validar viajem</button>
        <p>Viagem: {mensagem}</p>
      </div>
    </>
  );
}

export default Ex_um;
