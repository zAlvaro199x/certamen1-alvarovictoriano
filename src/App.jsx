import { useState } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import BarraNavegacion from './componentes/BarraNavegacion.jsx';
import FormularioGuerrero from './componentes/FormularioGuerrero.jsx';
import TablaGuerreros from './componentes/TablaGuerreros.jsx';

const tema = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#9c3d32' },
    secondary: { main: '#c49a50' },
    background: { default: '#171512', paper: '#29241f' },
  },
});

function App() {
  const [guerreros, setGuerreros] = useState([]);

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
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
    </ThemeProvider>
  );
}

export default App;