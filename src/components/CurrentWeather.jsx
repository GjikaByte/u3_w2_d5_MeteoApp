import { Card, Badge } from 'react-bootstrap';

export default function CurrentWeather({ city, data }) {
  const w = data.weather?.[0];
  const willRain = (w?.main || '').toLowerCase().includes('rain') || !!data.rain;
  const icon = w?.icon ? `https://openweathermap.org/img/wn/${w.icon}@2x.png` : null;

  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title className="d-flex align-items-center justify-content-between">
          <span>{city} • {Math.round(data.main.temp)}°C</span>
          {icon && <img src={icon} alt={w.description} style={{ width: 48, height: 48 }} />}
        </Card.Title>
        <Card.Text className="mb-2 text-capitalize">{w?.description}</Card.Text>

        <div className="d-flex gap-3 small">
          <span>Sensazione {Math.round(data.main.feels_like)}°C</span>
          <span>Umidità {data.main.humidity}%</span>
          <span>Vento {Math.round(data.wind.speed)} m/s</span>
        </div>

        <div className="mt-3">
          {willRain ? (
            <Badge bg="warning" text="dark">Possibili piogge</Badge>
          ) : (
            <Badge bg="success">Nessuna pioggia prevista</Badge>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
