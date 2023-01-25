
import GlobalStyle from "./Global"
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Skill from "./components/Skill";
import Projeckt from "./components/Project";



 
function App() {
  return (
    <>
      <GlobalStyle/>
        <Header/>
        <About />
        <Skill/>
        <Projeckt/>
        <Footer/>
    </>
    
  );
}

export default App;
