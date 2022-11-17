import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Registros from './pages/Registros'
import GlobalStyle from './assets/style/GlobalStyle'
import NovoRegistro from './pages/NovoRegistro'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/registros' element={<Registros/>}/>
        <Route path='/novoregistro/:tipo' element={<NovoRegistro/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
