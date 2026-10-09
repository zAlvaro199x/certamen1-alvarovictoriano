function App() {
  return (
    <main className="app-shell">
      <div className="status-pill">
        <span className="status-dot" aria-hidden="true" />
        Conectado al proyecto
      </div>

      <section className="project-card">
        <p className="eyebrow">GitHub Copilot</p>
        <h1>Proyecto activo</h1>
        <p className="description">
          Estoy viendo tu código y ya estoy conectado a esta aplicación.
        </p>

        <ul className="feature-list">
          <li>React + Vite</li>
          <li>Estilo visual añadido</li>
          <li>Indicador de conexión visible</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
