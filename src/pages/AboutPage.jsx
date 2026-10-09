import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="card shadow-sm">
          <div className="card-body p-4">
            <h1 className="h3 mb-3">Acerca de</h1>
            <p className="mb-3">Aquí podrías poner otra vista, contenido extra o una segunda página.</p>
            <button type="button" className="btn btn-primary" onClick={() => navigate('/')}>
              Volver al inicio
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;
