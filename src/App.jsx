import "./App.css";
// import "./components/styles/components/Navbar/styles.scss";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemLisContainer } from "./components/ItemListContainer/ItemListContainer";


function App() {
  return (
    <div>
      <Navbar />
      <ItemLisContainer saludo={"Hola mundo"}/>
    </div>
  );
}

export default App;
