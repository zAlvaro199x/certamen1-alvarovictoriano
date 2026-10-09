import { useState } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion.jsx';
import FormularioGuerrero from './componentes/FormularioGuerrero.jsx';
import TablaGuerreros from './componentes/TablaGuerreros.jsx';

function App() {
  const [guerreros, setGuerreros] = useState([]);

  return (
    <>
      <BarraNavegacion />
      <FormularioGuerrero
        onRegistrar={(guerrero) => setGuerreros((anteriores) => [...anteriores, guerrero])}
      />
      <TablaGuerreros
        guerreros={guerreros}
        onEliminar={(indice) =>
          setGuerreros((anteriores) => anteriores.filter((_, i) => i !== indice))
        }
      />
    </>
  );
}

export default App;