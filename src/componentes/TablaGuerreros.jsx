import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function TablaGuerreros({ guerreros, onEliminar }) {
  return(
    <div className="container pb-4">
      <div className="row justify-content-center">
        <div className="col-12">
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>Despliegue del Ejercito</Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre del Guerrero</TableCell>
                      <TableCell>Tipo de Guerrero</TableCell>
                      <TableCell>Categoria / Rango</TableCell>
                      <TableCell>Nivel</TableCell>
                      <TableCell>Clasificacion</TableCell>
                      <TableCell>Accion</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {guerreros.map((guerrero, indice) => (
                      <TableRow key={indice}>
                        <TableCell>{guerrero.nombre}</TableCell>
                        <TableCell>{guerrero.tipo}</TableCell>
                        <TableCell>{guerrero.categoria}</TableCell>
                        <TableCell>{guerrero.nivel}</TableCell>
                        <TableCell>
                          <Chip
                            label={guerrero.tipo}
                            color={guerrero.tipo === 'Orco' ? 'success' : 'secondary'}
                          />
                        </TableCell>
                        <TableCell>
                          <Button
                            color="error"
                            onClick={() => onEliminar(indice)} sx={{ textTransform: 'none' }}> Asesinado por la aparicion </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default TablaGuerreros;
