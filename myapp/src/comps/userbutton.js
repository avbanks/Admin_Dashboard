import React, { Component } from 'react';
import styled from 'styled-components';


const UserBut = styled.div`
	background-color: rgb(222,89,57);
	height: 35px;
	width: 50px;
	margin-top: auto;
	color: rgb(153,63,49);
	&:hover {
		background-color: rgb(186,78,59);
		color: rgb(250,114,86);
	};
`;

const UserButton = (props) => {
	return (
		<UserBut>{props.children}</UserBut>
	);
}

export default UserButton;

