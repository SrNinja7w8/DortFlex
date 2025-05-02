import LogarSe from './components/LogarSe.jsx';
import RegistrarSe from './components/RegistrarSe.jsx';
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
        <RegistrarSe />
      )
    }
  }
  
}

export default App
