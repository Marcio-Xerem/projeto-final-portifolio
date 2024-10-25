import * as React from "react";
import * as ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Inicial from "./routes/Inicial";
import DadosPessoais from "./routes/DadosPessoais";
import ObjetivoProfissional from "./routes/ObjetivoProfissional";
import FormacaoAcademica from "./routes/FormacaoAcademica";
import Portifolio from "./routes/Portifolio";
import Qualificacoes from "./routes/Qualificacoes";
import Idiomas from "./routes/Idiomas";
import AtividadesExtracurriculares from "./routes/AtividadesExtracurriculares";
import CursosPalestras from "./routes/CursosPalestras";
import HistoricoProfissional from "./routes/HistoricoProfissional";
import Condecoracoes from "./routes/Condecoracoes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,    
    children: [
      {
        path: '/',
        element: <Inicial />,
      },
      {
        path: 'dados-pessoais',
        element: <DadosPessoais />,
      },
      {
        path: 'objetivo-profissional',
        element: <ObjetivoProfissional />,
      },
      {
        path: 'formacao-academica',
        element: <FormacaoAcademica />,
      },
      {
        path: 'portifolio',
        element: <Portifolio />,
      },
      {
        path: 'qualificacoes',
        element: <Qualificacoes />,
      },
      {
        path: 'idiomas',
        element: <Idiomas />,
      },
      {
        path: 'atividades-extracurriculares',
        element: <AtividadesExtracurriculares />,
      },
      {
        path: 'cursos-palestras',
        element: <CursosPalestras />,
      },
      {
        path: 'historico-profissional',
        element: <HistoricoProfissional />,
      },
      {
        path: 'condecoracoes',
        element: <Condecoracoes />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
