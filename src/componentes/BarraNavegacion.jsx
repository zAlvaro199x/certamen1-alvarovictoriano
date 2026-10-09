import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function BarraNavegacion() {
  return(
    <AppBar position="static">
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h5" component="div">Anillo Unico</Typography>
        <Typography variant="body1" component="div"> Uno para dominarlos a todos </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default BarraNavegacion;
