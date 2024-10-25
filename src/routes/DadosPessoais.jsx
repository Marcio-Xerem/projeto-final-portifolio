import AvatarMarcioXerem from './AvatarMarcioXerem.jsx';

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function DadosPessoais() {
    return (
        <div id="dadosPessoais">

            <h2>
                DADOS PESSOAIS
            </h2>

            <AvatarMarcioXerem />

            <h3>
                MÁRCIO DA MOTA XERÉM
            </h3>
            <p>
                Av. Lucio Costa, 16.130, Apto 101
                Recreio dos Bandeirantes – RJ
            </p>
            <p>
                Brasileiro, casado, 56 anos
            </p>
            <p>
                Telefones: (21) 99632-3015 / 2201-1588
            </p>
            <p>
                E-mail: mxerem@hotmail.com / mxerem@gmail.com / mxerem@icloud.com
            </p>
            <p>
                Redes Sociais:
                <ul className="listaRedesSociais">
                    <li><FaFacebook /><a href="https://www.facebook.com/marcio.damotaxerem.3?mibextid=LQQJ4d"> Facebook</a></li>
                    <li><FaInstagramSquare /><a href="https://www.instagram.com/marcio_xerem/"> Instagram</a></li>
                    <li><FaLinkedin /><a href="https://www.facebook.com/marcio.damotaxerem.3?mibextid=LQQJ4d"> Linkedin</a></li>
                </ul>
            </p>
        </div>)
}