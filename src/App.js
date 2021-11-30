import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './Context/categoriaContext';
import RecetasProvider from './Context/RecetasContext';
import ModalProvider from './Context/modalContext';
import ListarRecetas from './components/listarRecetas';


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
      <Header />
      <div className="container">

      <div className="row">
        <Formulario></Formulario>  
       </div>

        </div>

        <ListarRecetas> </ListarRecetas>  

        </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
