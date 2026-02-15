import './App.css';
import menu from "./menu.json";
import { Item } from "./components/Item/Item.jsx";
import { Section } from "./components/Section/Section.jsx";


function App() {
  return (
    <>
      <Section>
        <Item menu={menu} />
      </Section>
    </>
  );
}

export default App;
