import styled from 'styled-components';

export const Box = styled.div`
background: white;
position: display;
bottom: 0;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: white; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 50px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
grid-gap: 100px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #000;
margin-bottom: 20px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;
export const FooterContent= styled.a`
color: #000;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: blue;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #000;
margin-bottom: 20px;
font-weight: bold;
`;
