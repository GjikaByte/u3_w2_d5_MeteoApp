import { Row, Col, Card, ProgressBar } from 'react-bootstrap';

export default function ForecastList({ days = [] }) {
  if (!days.length) return null;

  return (
    <Row className="g-3">
      {days.map(d => (
        <Col sm={6} lg={4} key={d.date}>
          <Card className="h-100">
            <Card.Body className="d-flex flex-column">
              <div className="d-flex align-items-center justify-content-between">
                <Card.Title as="h6" className="m-0">{fmtDate(d.date)}</Card.Title>
                {d.icon && (
                  <img
                    src={`https://openweathermap.org/img/wn/${d.icon}.png`}
                    alt={d.desc}
                    width={40} height={40}
                  />
                )}
              </div>

              <div className="mt-2">
                <strong>{d.max}°</strong> / <span className="text-muted">{d.min}°</span>
              </div>
              <div className="text-capitalize small text-muted">{d.desc}</div>

              <div className="mt-2">
                <div className="d-flex justify-content-between small">
                  <span>Pioggia</span><span>{d.pop}%</span>
                </div>
                <ProgressBar now={d.pop} variant={d.pop >= 50 ? 'warning' : 'info'} />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function fmtDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString('it-IT', { weekday: 'short', day: '2-digit', month: 'short' });
}
