import React, { Component } from 'react';
import styled from 'styled-components';

const SideBut = styled.div`
	&:hover {
		background-color: rgb(23,29,32);
	};
	height: 45px;
	width: 100%;
`;

const SideButton = (props) => {
	return (
			<SideBut>{props.children}</SideBut>
		)
}

export default SideButton
