import { useState } from 'react';
import { Container, Row, Col, Alert, Spinner } from 'react-bootstrap';
import CitySearch from './components/CitySearch.jsx';
import CurrentWeather from './components/CurrentWeather.jsx';
import ForecastList from './components/ForecastList.jsx';

const API_KEY = 'abcfdf1063a02a0de2b5b1c071b22ea7';
const BASE = 'https://api.openweathermap.org/data/2.5';

export default function App() {
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]); // 5 giorni
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  async function handleSearch(nextCity) {
    setCity(nextCity);
    if (!nextCity) return;
    setLoading(true);
    setErr('');
    try {
      // chiamate in parallelo
      const [rNow, rFc] = await Promise.all([
        fetch(`${BASE}/weather?q=${encodeURIComponent(nextCity)}&appid=${API_KEY}&units=metric&lang=it`),
        fetch(`${BASE}/forecast?q=${encodeURIComponent(nextCity)}&appid=${API_KEY}&units=metric&lang=it`)
      ]);

      if (!rNow.ok) throw new Error(`Meteo attuale: ${rNow.status}`);
      if (!rFc.ok) throw new Error(`Previsioni: ${rFc.status}`);

      const now = await rNow.json();
      const fc = await rFc.json();

      setCurrent(now);
      setForecast(buildFiveDays(fc.list));
    } catch (e) {
      setErr(e.message || 'Errore durante il caricamento');
      setCurrent(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container className="py-4">
      <Row className="mb-3">
        <Col>
          <h1 className="h3">Il mio Meteo</h1>
          <p className="text-muted m-0">Cerca una città e scopri se pioverà 🌧️</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={8}>
          <CitySearch onSearch={handleSearch} defaultCity="Roma" />
        </Col>
      </Row>

      {err && <Alert variant="danger" className="mb-3">{err}</Alert>}
      {loading && <div className="mb-3"><Spinner animation="border" size="sm" /> Caricamento…</div>}

      {!loading && current && (
        <Row className="g-4">
          <Col md={5}><CurrentWeather city={city} data={current} /></Col>
          <Col md={7}><ForecastList days={forecast} /></Col>
        </Row>
      )}
    </Container>
  );
}

/** Converte la lista 3h -> 5 giorni (min/max, icona e prob. pioggia) */
function buildFiveDays(list = []) {
  const byDate = {};
  list.forEach(item => {
    const date = item.dt_txt.split(' ')[0]; // YYYY-MM-DD
    (byDate[date] ||= []).push(item);
  });

  // Prendi i prossimi 5 giorni (includendo oggi)
  return Object.entries(byDate)
    .slice(0, 5)
    .map(([date, arr]) => {
      const tempsMin = arr.map(a => a.main.temp_min);
      const tempsMax = arr.map(a => a.main.temp_max);
      const noon = arr.find(a => a.dt_txt.includes('12:00:00')) || arr[Math.floor(arr.length / 2)];
      const icon = noon.weather?.[0]?.icon;
      const desc = noon.weather?.[0]?.description || '';
      const pop = Math.round(Math.max(...arr.map(a => a.pop || 0)) * 100); // % pioggia

      return {
        date,
        min: Math.round(Math.min(...tempsMin)),
        max: Math.round(Math.max(...tempsMax)),
        icon,
        desc,
        pop
      };
    });
}
