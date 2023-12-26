import Landing from './Pages/Landing';
import Login from './Pages/Login';


import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/" element={ <Landing /> }/>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;