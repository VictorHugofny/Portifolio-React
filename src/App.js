import { useEffect } from 'react';
import './App.css';
import RoutesAPP from './routes';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-quad',
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <RoutesAPP/>
    </div>
  );
}

export default App;
