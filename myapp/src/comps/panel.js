import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
	background-color: white;
	width: ${props => props.width ? props.width : "42%"};
	padding: ${props => props.padding ? props.padding : "25px"};
	height: 50px;
	margin: 20px;
	border-radius: 10px

	`

const Panel = (props) => {
	
	return(
		<PanelWrapper>{props.children}</PanelWrapper>
	)
}

export default Panel
