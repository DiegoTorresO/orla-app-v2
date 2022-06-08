import * as React from 'react';
import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));



export default function BasicCard({ mostrar }) {
   
    const [datos, setDatos] = useState({
        nombre: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)    
    }
    
    
    return (
        <form>
        <Card sx={{ minWidth: 300 }}>
            <CardContent sx={{ fontSize: 14, mb: 2, mr: 2 }}>
                <Typography color="text.primary">
                    Introduce tú número de alumno
                </Typography>
                <Typography sx={{ mb: 4 }} color="text.primary">
                    para obtener tu orla.
                </Typography>

                {/* <FormControl variant="standard">
                    <InputLabel shrink htmlFor="bootstrap-input" required >
                        ID Alummno
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" placeholder='ej. 452765' />
                </FormControl> */}
                <label>
    Name:
    <input type="text" name="name" className="form-control" onChange={handleInputChange} name="nombre"/>
  </label>
            </CardContent>
            <CardActions style={{ justifyContent: 'right', fontSize: 14, mb: 4 }}  >
                 {/* <Button variant="contained" endIcon={<SendIcon />}
                    sx={{ fontSize: 14, mb: 2, mr: 2 }}  onClick={() => {
                        mostrar(() => {
                            return {
                                BasicCard: false,
                                NavBar: false,
                                NavBarV2: true,
                                Selector: true
                            };
                        })
                    }}  type="submit">
                    Enviar
                </Button>  */}
                <Button type="submit" variant="contained" endIcon={<SendIcon />}
                    sx={{ fontSize: 14, mb: 2, mr: 2 }}>Enviar</Button>
            </CardActions>
        </Card>
        </form>
    );
}
