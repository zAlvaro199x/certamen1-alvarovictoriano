import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function FormularioGuerrero({ onRegistrar }) {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('Orco');
  const [nivel, setNivel] = useState(1);
  const [categoria, setCategoria] = useState('');
  const [amenaza, setAmenaza] = useState(1);

  function registrarGuerrero(evento) {
    evento.preventDefault();
    onRegistrar({ nombre, tipo, nivel, categoria, amenaza });
    setNombre('');
    setTipo('Orco');
    setNivel(1);
    setCategoria('');
    setAmenaza(1);
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Ingresar Guerrero
              </Typography>
              <form onSubmit={registrarGuerrero}>
                <div className="row g-3">
                  <div className="col-12">
                    <TextField
                      label="Nombre del Guerrero"
                      value={nombre}
                      onChange={(evento) => setNombre(evento.target.value)}
                      fullWidth
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <FormControl>
                      <FormLabel id="tipo-guerrero">Tipo de Guerrero</FormLabel>
                      <RadioGroup
                        aria-labelledby="tipo-guerrero"
                        name="tipo-guerrero"
                        value={tipo}
                        onChange={(evento) => setTipo(evento.target.value)}
                      >
                        <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                        <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <div className="col-12 col-md-6">
                    <Typography gutterBottom>
                      Nivel de Combate: {nivel}
                    </Typography>
                    <Slider
                      aria-label="Nivel de Combate"
                      value={nivel}
                      onChange={(_, valor) => setNivel(valor)}
                      min={1}
                      max={100}
                      step={1}
                      valueLabelDisplay="auto"
                    />
                  </div>
                  <div className="col-12 col-md-6">
                    <FormControl fullWidth required>
                      <InputLabel id="categoria-guerrero">Categoría / Rango</InputLabel>
                      <Select
                        labelId="categoria-guerrero"
                        value={categoria}
                        label="Categoría / Rango"
                        onChange={(evento) => setCategoria(evento.target.value)}
                      >
                        <MenuItem value="Capitán">Capitán</MenuItem>
                        <MenuItem value="Berserker">Berserker</MenuItem>
                        <MenuItem value="Explorador">Explorador</MenuItem>
                        <MenuItem value="Asediador">Asediador</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-12 col-md-6">
                    <FormControl>
                      <FormLabel id="nivel-amenaza">Nivel de Amenaza / Furia</FormLabel>
                      <Rating
                        aria-labelledby="nivel-amenaza"
                        name="nivel-amenaza"
                        value={amenaza}
                        onChange={(_, valor) => setAmenaza(valor ?? 1)}
                        max={5}
                      />
                    </FormControl>
                  </div>
                  <div className="col-12">
                    <Button type="submit" variant="contained">
                      Registrar Guerrero
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default FormularioGuerrero;
