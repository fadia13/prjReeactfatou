import './App.css';
import Header from './HeaderComponent'
// un composant c'est une fonction javascript que retourne un html 
// les props

function App() {
  const title = 'formation react';
  return (
    <div className="App">
      <p>{title}</p>
      <Header />
    </div>
  );
}

export default App;
