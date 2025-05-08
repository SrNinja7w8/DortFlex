import LogarSe from './components/Interfaces/LogarSe.jsx';
import RegistrarSe from './components/Interfaces/RegistrarSe.jsx';
function App() {
  let pagina = window.location.pathname
  if(pagina === '/index.html') {
    return (
      <RegistrarSe />
    )
  }
  else {
    if(pagina === '/login.html') {
      return (
        <LogarSe />
      )
    }
    else {
      return (
        <LogarSe />
      )
    }
  }
  
}

export default App
