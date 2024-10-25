import { useState } from 'react';
import DadosPessoais from './DadosPessoais';

function Inicial() {
  const [boasVindas, BoasVindas] = useState('Esse é o currículo de Márcio da Mota Xerém. Clique no botão abaixo para ver os dados principais ou nas opções ao lados para ver os detalhes deste currículo');
  const [mostrarBotao, MostrarBotao] = useState(true);

  const mostrarDadosPrincipais = () => {
    BoasVindas(DadosPessoais);
    MostrarBotao(false); // Oculta o botão após o clique
  };

  return (
    <>
      <div className="Inicial">
        <p>{boasVindas}</p>              
        {mostrarBotao && (
          <button onClick={mostrarDadosPrincipais}>Ver dados principais</button>        
        )}
      </div>
    </>
  );
}

export default Inicial;
