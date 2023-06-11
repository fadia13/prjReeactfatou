import './App.css';
import Header from './HeaderComponent'

// un composant c'est une fonction javascript que retourne un html 
// jsx c'est javascript avec html
// les props:c'est un object c'est sont  Des données envoyeés de composant parent vers un composant fils

function App() {
   // pour utiliser de javascript dans le html il faut utiliser les {}
   const title = 'Formation react';
  const infoHeader = "c'est un header"
  return (
    <div className="App">
      <p>{title}</p>
      <Header infoHeader={infoHeader} headerSize={100} isHeader={true} headerTab={['home', 'products', 'categories']} />
    </div>
  );
}

export default App;
