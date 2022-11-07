import { BrowserRouter, Routes } from 'react-router-dom';
import buildRoutes from './routes/Router';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        {buildRoutes()}
      </Routes>
    </BrowserRouter>
  );
};

export default App;