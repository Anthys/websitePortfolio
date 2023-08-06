import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Checkout from "./checkout/Checkout";
import BackOffice from "./checkout/BackOffice";

export default function App() {
  return (
    <HashRouter  >
      <Routes>
        <Route path="/">
          <Route index element={<Checkout />} />
          <Route path="backoffice" element={<BackOffice />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);