import React, { Component } from 'react';
import styled from 'styled-components';
import UserButton from './userbutton';
const FA = require('react-fontawesome');

const UserNavTop = styled.div`
	background-color: rgb(250,114,82);
	width: 100%;
	height: 110px;
	display: flex;
`;

const fontawestyle = {
	margin: "10px 0px 0px 15px"
}

const UserTopHeader = () => {
	return (
		<UserNavTop>
			<UserButton>
				<FA name="gear" style={fontawestyle}/>
			</UserButton>
			<UserButton>
				<FA name="comments" style={fontawestyle}/>
			</UserButton>
			<UserButton>
				<FA name="pie-chart" style={fontawestyle}/>
			</UserButton>
			<UserButton>
				<FA name="list-ul" style={fontawestyle}/>
			</UserButton>
			<UserButton>
				<FA name="bell" style={fontawestyle}/>
			</UserButton>
		</UserNavTop>
	);
}

export default UserTopHeader;
