import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SendIcon from '@mui/icons-material/Send';
import Form from 'react-bootstrap/Form';
import { InputText } from 'primereact/inputtext';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';






export default function BasicCard({ mostrar }) {

    let alumno = null;

    const [datos, setDatos] = useState({
        alumno: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        localStorage.setItem("alumno", datos.alumno)
        mostrar(() => {
            return {
                ...alumno,
                BasicCard: false,
                NavBar: false,
                NavBarV2: true,
                Selector: true
            };
        })
    }


    return (
        <Form onSubmit={enviarDatos}>
            <Card sx={{ minWidth: 300 }}>
                <CardContent sx={{ fontSize: 14, mb: 2, mr: 2 }}>
                    <Typography color="text.primary">
                        Introduce tú número de alumno
                    </Typography>
                    <Typography sx={{ mb: 4 }} color="text.primary">
                        para obtener tu orla.
                    </Typography>
                    <span className="p-float-label">
                        <InputText id="input" className="form-control" onChange={handleInputChange} name="alumno" />
                        <label htmlFor="input" class="ml-4">ID de Alumno</label>
                    </span>
                </CardContent>
                <CardActions style={{ justifyContent: 'right', fontSize: 14, mb: 4 }}>
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}
                        sx={{ fontSize: 14, mb: 2, mr: 2 }}>Enviar</Button>
                </CardActions>
            </Card>
        </Form>
    );

}
