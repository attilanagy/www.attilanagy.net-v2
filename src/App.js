import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/not-found/NotFoundPage';
import RootPage from './pages/root/RootPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<RootPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
