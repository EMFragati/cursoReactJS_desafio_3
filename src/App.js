import './App.css';
import NavBar from './components/NavBar';
import WelcomMessage from './components/WelcomMessage';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <header><NavBar></NavBar></header>
      <main>
        <ItemListContainer></ItemListContainer>
        <hr></hr>
        <WelcomMessage></WelcomMessage>       
      </main>
    </>
  )
}
export default App;