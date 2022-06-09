import * as React from 'react';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import FoIn from '../assets/506973.jpg';
import Orla from '../assets/VS1PRP.jpg';

export default function Selector() {
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
                            <TableCell align="center"><img src={Orla} alt="Logo" class="photo" /></TableCell>
                            <TableCell align="center"><img src={FoIn} alt="Logo" class="photo" /></TableCell>
                        </TableRow>


                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}