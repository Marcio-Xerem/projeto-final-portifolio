import { Outlet, Link, useLocation } from "react-router-dom";

export default function Root() {
    const location = useLocation();

    return (
        <>
            <h1 id="curriculo">Currículo Online - Márcio da Mota Xerém</h1>
            <div className="container">
                <nav id="navigation">
                    <ul>
                        <li className={location.pathname === "/dados-pessoais" ? "active" : ""}>
                            <Link to="dados-pessoais">Dados pessoais principais</Link>
                        </li>
                        <li className={location.pathname === "/objetivo-profissional" ? "active" : ""}>
                            <Link to="objetivo-profissional">Objetivo profissional</Link>
                        </li>
                        <li className={location.pathname === "/formacao-academica" ? "active" : ""}>
                            <Link to="formacao-academica">Formação Acadêmica</Link>
                        </li>
                        <li className={location.pathname === "/portifolio" ? "active" : ""}>
                            <Link to="portifolio">Portifólio</Link>
                        </li>
                        <li className={location.pathname === "/qualificacoes" ? "active" : ""}>
                            <Link to="qualificacoes">Qualificações</Link>
                        </li>
                        <li className={location.pathname === "/idiomas" ? "active" : ""}>
                            <Link to="idiomas">Idiomas</Link>
                        </li>
                        <li className={location.pathname === "/atividades-extracurriculares" ? "active" : ""}>
                            <Link to="atividades-extracurriculares">Atividades Extracurriculares</Link>
                        </li>
                        <li className={location.pathname === "/cursos-palestras" ? "active" : ""}>
                            <Link to="cursos-palestras">Cursos e Palestras</Link>
                        </li>
                        <li className={location.pathname === "/historico-profissional" ? "active" : ""}>
                            <Link to="historico-profissional">Histórico Profissional</Link>
                        </li>
                        <li className={location.pathname === "/condecoracoes" ? "active" : ""}>
                            <Link to="condecoracoes">Condecorações</Link>
                        </li>
                    </ul>
                </nav>
                <div id="detail">
                    <Outlet />
                </div>
            </div>
        </>
    );
}