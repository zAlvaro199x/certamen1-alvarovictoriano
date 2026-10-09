import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function HomePage() {
  const navigate = useNavigate();
  const [name, setNombre] = useState('');
  const [message, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      setMensaje('Escribe tu nombre antes de enviar.');
      return;
    }

    setMensaje(`¡Hola, ${name.trim()}!`);
  };

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h1 className="h3 mb-3">Formulario</h1>

                <form onSubmit={handleSubmit} className="d-grid gap-3">
                  <div>
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(event) => setNombre(event.target.value)}
                      placeholder="Ej: Ana"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                </form>

                {message && (
                  <div className="alert alert-success mt-3 mb-0">{message}</div>
                )}

                <button
                  type="button"
                  className="btn btn-link mt-3 p-0"
                  onClick={() => navigate('/about')}
                >
                  Ir a otra página
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default HomePage;
