import Toolbar from '../components/Toolbar.jsx';
import OmdbGallery from '../components/OmdbGallery.jsx';

export default function TVShows() {
  return (
    <>
      <Toolbar />
      <OmdbGallery title="Sci-Fi TV" query="Star Trek" />
      <OmdbGallery title="Fantasy TV" query="Game of Thrones" />
      <OmdbGallery title="Crime TV" query="Breaking Bad" />
    </>
  );
}
