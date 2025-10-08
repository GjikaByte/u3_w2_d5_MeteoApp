
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OMDB_ENDPOINT = 'https://www.omdbapi.com/';
const OMDB_KEY = import.meta.env.VITE_OMDB_KEY || '96893dbc'; 

const COMMENTS_BASE = 'https://striveschool-api.herokuapp.com/api/comments/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlNzBhYjk2MDFiZjAwMTViNGE3MzciLCJpYXQiOjE3NTk0MDgyOTksImV4cCI6MTc2MDYxNzg5OX0.Uzq4zcSW9kcIFserkiQEItDiM1zQG_YtajvtJpHFcEY';

export default function MovieDetails() {
  const { movieId } = useParams();              

  const [details, setDetails] = useState(null);
  const [dLoading, setDLoading] = useState(false);
  const [dErr, setDErr] = useState('');

  
  useEffect(() => {
    if (!movieId) return;
    let abort = false;
    (async () => {
      setDLoading(true); setDErr('');
      try {
        const res = await fetch(`${OMDB_ENDPOINT}?apikey=${OMDB_KEY}&i=${movieId}`);
        const data = await res.json();
        if (abort) return;
        if (data.Response === 'True') setDetails(data);
        else setDErr(data.Error || 'Dettagli non disponibili');
      } catch (e) {
        if (!abort) setDErr(e.message || 'Errore rete (details)');
      } finally {
        if (!abort) setDLoading(false);
      }
    })();
    return () => { abort = true; };
  }, []);

  

}
