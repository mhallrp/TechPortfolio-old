import Landing from './Pages/Landing';
import NewPage from './Pages/NewPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/new" element={ <NewPage /> }/>
          <Route path="/" element={ <Landing /> }/>
      </Routes>
    </ BrowserRouter>
  );
}

export default App;