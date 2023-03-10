import Mainpage from "./Components/Mainpage";
import {Routes,Route} from "react-router-dom";
import Productpage from "./Components/Productpage";
import Uploadpage from "./Components/Uploadpage";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import { CorpIntro, Terms } from './Pages/Toe';
// import 'antd/dist/antd.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Productpage/:id" element={<Productpage />} />
        <Route path="/Uploadpage" element={<Uploadpage />} />
        <Route path="/CorpIntro" element={<CorpIntro />} />
        <Route path="/Terms" element={<Terms />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
