import Bascet from "./components/bascet/bascet";
import ButtenUp from "./components/buttonUp/buttonUp";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Like from "./components/like/like";
import Pages from "./pages/pages";


function App() {
  return (
    <div className="App">
      <ButtenUp/>
      <Like/>
      <Bascet/>
      <Header/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
