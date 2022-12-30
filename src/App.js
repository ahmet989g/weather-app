import './App.css';
import { CityProvider } from './context/CityContext';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <CityProvider>
        <WeatherProvider>
          <Header />
          <Main />
        </WeatherProvider>
      </CityProvider>
    </div>
  );
}

export default App;
