import "@crossfox/css-start";
import "../assets/scss/main.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DeliveryPage from "../pages/delivery/deliveryPage";
import SalesPages from "../pages/sales/salesPage";
import mainProducts from "../pages/mainProducts/mainProducts";
import MainPage from "../pages/main";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
        <mainProducts />

        <Routes>
          <Route path="/" Component={MainPage} />
          <Route path="/sales" Component={SalesPages} />
          <Route path="/delivery" Component={DeliveryPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
