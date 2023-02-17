import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/mediaQuery.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* Body */}
        {/* HomeBody for home page */}
        <Home />
        {/* HomeBody for home page */}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
