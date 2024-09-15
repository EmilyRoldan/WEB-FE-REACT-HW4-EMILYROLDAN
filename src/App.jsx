import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { amenazas, debilidades, fortalezas, oportunidades, objetivos } from "./utils/data";

function App() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
    <Header title= "Smart home"/>
    <Main debilidades={debilidades} fortalezas={fortalezas} amenazas={amenazas} oportunidades={oportunidades}  objetivos={objetivos}/>
    <Footer/>
    </div>
  );
}

export default App