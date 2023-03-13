import Mainpage from "./Components/Mainpage";
import {Routes,Route} from "react-router-dom";
import Productpage from "./Components/Productpage";
import Uploadpage from "./Components/Uploadpage";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import { CorpIntro, Terms } from './Pages/Toe';
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <div>
      <ConfigProvider theme={{token:{colorPrimary:"#0f6180"}}}>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Productpage/:id" element={<Productpage />} />
          <Route path="/Uploadpage" element={<Uploadpage />} />
          <Route path="/CorpIntro" element={<CorpIntro />} />
          <Route path="/Terms" element={<Terms />} />
        </Routes>
        <Footer></Footer>
      </ConfigProvider>
    </div>
  );
}

export default App;
