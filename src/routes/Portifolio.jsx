import { Link } from "react-router-dom";
import ProjetoDecida from './ProjetoDecida.jsx';

export default function Portifolio() {    
    return (
        <div id="portifolio">
            
                <h2>
                    PORTIFOLIO
                </h2>

            <ul>
                <li>
                    <h4>Projeto Decida</h4>
                    <p>Aplicação desenvolvida para a Marinha do Brasil, a fim de auxiliar no treinamento de militares do Corpo de Fuzilerios Navais</p>
                    <ProjetoDecida />
                </li>             
                <li>
                    <Link to={`https://github.com/Marcio-Xerem`}><h4>Meu GitHub</h4></Link>
                </li>             
            </ul>           
        </div> )       
}