import './App.css';
import About from './components/About';
import Contact from './components/contact';
import Header from './components/Header';
import Menu from './components/Menu';
import WelcomePage from './components/welcomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; 
import Cart from './components/cart';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;