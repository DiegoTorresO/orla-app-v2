import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
FooterContent,
Heading,
} from "./FooterStyles";
import localización from '../assets/localizacion.jpg'; 

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>Otros sitios</Heading>
			<FooterLink target="_blank" href="https://www.educa.jccm.es/es">Portal de Educación</FooterLink>
			<FooterLink target="_blank" href="https://ssopapas.jccm.es/ssopapas/login?service=https%3A%2F%2Fpapas.jccm.es%2Faccesopapas%2Flogin%2Fcas">Programa papas</FooterLink>
			<FooterLink target="_blank" href="http://www.iesazarquiel.es/intranet/">Intranet</FooterLink>
			<FooterLink target="_blank" href="https://delphos.jccm.es/delphos/">Delphos</FooterLink>
		</Column>
		<Column>
			<Heading>Contacto</Heading>
            <FooterContent>I.E.S. Azarquiel
            <br/>Paseo de San Eugenio, 21
            <br/>45003 - Toledo</FooterContent>
            <FooterContent>925284043</FooterContent>
            <FooterContent> CENTRO: 45003875.ies@edu.jccm.es</FooterContent>
            <FooterContent>PAPAS: azarquiel.papas@gmail.com</FooterContent>
            <FooterContent>AMPA: azarquiel.ampa@gmail.com</FooterContent>
		</Column>
		<Column>
			<Heading>Localización</Heading>
            <FooterLink target="_blank" href="https://www.google.es/maps/place/IES+Azarquiel/@39.8710026,-4.0229788,17z/data=!3m1!4b1!4m5!3m4!1s0xd6a0a53483a57e7:0xc7f7d4815179b44b!8m2!3d39.8710026!4d-4.0229788"><img alt="Link a Google Maps"  src={localización} width="500px"/></FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
