import Search from './components/Search';
import Meals from './components/Meals';
import Modal from './components/Modal';
import Favourites from './components/Favourites';
import './App.css';
import { UseGlobalContext } from "./context";

function App() {
  const { showModal, favourites } = UseGlobalContext();
  return (
    <main>
       <Search />
{ favourites.length > 0 && <Favourites /> 
}      <Meals />
      { showModal && <Modal/> }
    </main>
  );
}

export default App;
