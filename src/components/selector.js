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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PrintIcon from '@mui/icons-material/Print';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';

const style = {
    transition: 2,
    width: 'fit-content',
    height: 'fit-content',
    bgcolor: 'white',
    borderRadius: 5,
    boxShadow: 24,
    padding: 5,
    margin: '0 auto',
    marginTop: 5,
};

export default function Selector() {
    const [ignored, forceUpdate] = React.useReducer(x => 1, 0)
    let id = localStorage.getItem("alumnoId")
    const dbRef = ref(getDatabase());
    get(child(dbRef, `/ALUMNOS/${id}`)).then((snapshot) => {
        if (snapshot.exists()) {
            const datos = snapshot.val();
            localStorage.setItem("alumno", JSON.stringify(datos));
            localStorage.setItem("cursoAlumno", JSON.stringify(datos.CURSO));
            localStorage.setItem("foto", JSON.stringify(datos.FOTO));
            get(child(dbRef, `/CURSOS/${datos.CURSO}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    const datosCurso = snapshot.val();
                    localStorage.setItem("curso", JSON.stringify(datosCurso));
                    localStorage.setItem("orla", JSON.stringify(datosCurso.ORLA));
                    forceUpdate();
                }
            })
        } else {
            alert("No hay registros de ese ID");
        }
    }).catch((error) => {
        console.error(error);
    });
    const printIframe = (id) => {
        console.log(id)
        console.log(document.getElementById(id))
        const iframe = document.getElementById(id);
        const iframeWindow = iframe.contentWindow || iframe;
        iframe.focus();
        iframeWindow.print();
        return true;
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    setTimeout(250);
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
                            <TableCell align="center"><img src={JSON.parse(localStorage.getItem("foto"))} alt="Foto individual" id="foto" className="photo" /></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">
                                {/* <a href={JSON.parse(localStorage.getItem("orla"))} target="_blank" rel="noreferrer" download="Orla"> */}
                                <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }} onClick={handleOpen}><ZoomInIcon /></Button>{/* </a> */}
                                <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }} disabled={true} onClick={() => printIframe('printOrla')} >
                                    <PrintIcon /></Button>
                            </TableCell>
                            <TableCell align="center">
                                {/*  <a href={JSON.parse(localStorage.getItem("foto"))} target="_blank" rel="noreferrer" download={id}> */}
                                <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }}  onClick={handleOpen2}><ZoomInIcon /></Button>{/* </a> */}
                                <Button type="submit" variant="contained"
                                    sx={{ fontSize: 14, mb: 2, mr: 2 }} disabled={true} onClick={() => printIframe('printFoto')} >
                                    <PrintIcon /></Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <img src={JSON.parse(localStorage.getItem("orla"))} alt="Orla" className='modalPhoto' />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>
                        <Button type="submit" variant="contained" color="error"
                            sx={{ mb: 1 }} onClick={handleClose}><ZoomOutIcon /></Button>
                    </Typography>
                </Box>
            </Modal>
            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <img src={JSON.parse(localStorage.getItem("foto"))} alt="Foto" className='modalPhoto' />
                    </Typography>
                    <Typography id="modal-modal-description" sx={{
                        display: 'flex',
                        flexDirection: 'row-reverse'
                    }}>
                        <Button type="submit" variant="contained" color="error"
                            sx={{ mb: 1 }} onClick={handleClose2}><ZoomOutIcon /></Button>
                    </Typography>
                </Box>
            </Modal>
            <iframe src={JSON.parse(localStorage.getItem("foto"))} Style="display: none;"
                title="printFoto" id="printFoto"></iframe>
            <iframe src={JSON.parse(localStorage.getItem("orla"))} Style="display: none;"
                title="printOrla" id="printOrla"></iframe>
        </div>
    );
}