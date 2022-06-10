import * as React from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import db from './firebase'
import { getDatabase, ref, child, get } from "firebase/database";
import Button from '@mui/material/Button';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

 

export default function Selector() {

    
    const [ignored, forceUpdate] = React.useReducer(x=>1, 0)
    let id = localStorage.getItem("alumnoId")
    const dbRef = ref(getDatabase());
    get(child(dbRef, `alumnos/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const datos = snapshot.val();
            localStorage.setItem("alumno", JSON.stringify(datos));
            localStorage.setItem("cursoAlumno", JSON.stringify(datos.curso));
            localStorage.setItem("foto", JSON.stringify(datos.foto));
            get(child(dbRef, `cursos/${datos.curso}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const datosCurso = snapshot.val();
                    localStorage.setItem("curso", JSON.stringify(datosCurso));
                    localStorage.setItem("orla", JSON.stringify(datosCurso.orla));
                    forceUpdate();
                    
                }
            })
        } else {
            alert("No hay registros de ese ID");
        }
    }).catch((error) => {
        console.error(error);

    });
    
    return (
        <div>
            <TableContainer component={Card}>
                <Table sx={{ minWidth: 650 }}>

                    <TableHead>
                        <TableRow >
                            <TableCell align="center" sx={{ fontSize: 18, color: "black", mb: 20, fontWeight: 'bold' }}>Orla</TableCell>
                            <TableCell align="center" sx={{ fontSize: 18, color: "black", mb: 20, fontWeight: 'bold' }}>Foto Individual</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell align="center"><img src={JSON.parse(localStorage.getItem("orla"))} alt="Orla" className="photo" /></TableCell>
                            <TableCell align="center"><img src={JSON.parse(localStorage.getItem("foto"))} alt="Foto individual" className="photo" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">
                                <a href={JSON.parse(localStorage.getItem("orla"))} target="_blank" rel="noreferrer" download="Orla"> <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }}><ZoomInIcon /></Button></a>
                            </TableCell>
                            <TableCell align="center">
                                <a href={JSON.parse(localStorage.getItem("foto"))} target="_blank" rel="noreferrer" download={id}> <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }}><ZoomInIcon /></Button></a>
                            </TableCell>
                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}