import React, { Component } from 'react';
import styled from 'styled-components';
import TopBigButton from './topbigbutton';


const TopBar = styled.div`
	height: 75px;
	width: 100%;
	background-color: rgb(39,49,53);
	display: flex;
	flex-direction: row;
	justify-content: flex-end
`

const TopNavBar = (props) => {
	
	return (<TopBar>
						<TopBigButton default="blue" className="fa fa-user"/>	
						<TopBigButton default="blue" className="fa fa-cog"/>	
						<TopBigButton className="fa fa-envelope" /> 
						<TopBigButton default="blue" className="fa fa-rss"/>	
						<TopBigButton default="blue" className="fa fa-bullhorn"/>	
						<TopBigButton hoverback="rgb(250,114,82)" background="rgb(231,96,73)" color="white" width="85px" className="fa fa-power-off" />
					</TopBar>);
};

export default TopNavBar 
