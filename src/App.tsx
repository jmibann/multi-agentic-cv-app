import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { ComingSoonPage } from './pages/ComingSoonPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="portfolio" element={<ComingSoonPage title="Portfolio" />} />
          <Route path="blog" element={<ComingSoonPage title="Blog" />} />
          <Route path="contact" element={<ComingSoonPage title="Contact" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
