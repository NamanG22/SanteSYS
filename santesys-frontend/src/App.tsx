import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Layout } from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home/>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About/>
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
