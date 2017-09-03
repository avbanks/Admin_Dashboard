import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
	color: ${props => props.color ? props.color : "rgb(137,148,155)"};
	background-color: ${props => props.background	? props.background : "rgb(39,49,53)"};
	width: ${props => props.width ? props.width : "75px"};
	height: 100%;
	border: 0;
	font-size: 1.35em;
	&:hover {
		color: ${props => props.hovercolor ? props.hovercolor : "white"};
		background-color: ${props => props.hoverback ? props.hoverback : "rgb(39,49,53)"};

	}
`



const TopBigButton = (props) => {

	return (<Button {...props}>{props.children}</Button>);
}

export default TopBigButton;
