import './App.scss';
import '../src/fonts/Montserrat-Bold.ttf'
import '../src/fonts/Montserrat-Light.ttf'
import '../src/fonts/Montserrat-Medium.ttf'
import '../src/fonts/Montserrat-Regular.ttf'
import '../src/fonts/Montserrat-SemiBold.ttf'

import { Product } from './pages/Product/Product';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
