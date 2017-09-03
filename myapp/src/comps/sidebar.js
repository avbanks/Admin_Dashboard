import React, { Component } from 'react'
import styled from 'styled-components';
import UserTopHeader from './usertopheader';
import SideButton from './sidebarbutton';
import '../fonts/tri.ttf';
const FA = require('react-fontawesome');

const Styleside = styled.div`
	color: rgb(136,147,154);	
	background-color: rgb(39,49,53);
	width: 250px;
	height: 100%;
	font-family: "tri"
`;

const fontawestyle = {
	color: "rgb(136,147,154)",
	margin: "13px 0px 0px 20px",
	paddingRight: "20px"
}
const hrstyle = {
	color: "red",
	margin: "15px 25px 15px 25px",
	width: "200px",
	borderColor: "#3B4648",
	border: "0",
	borderTop: "1px solid #3B4648",
	borderWidth: "2px"
}

const inputbox = {
	backgroundColor: "rgb(39,49,53)",
	border: "0px",
	margin: "15px 0px 0px 15px",
	borderBottom: "2px",
	fontFamily: "tri",
	fontSize: ".85em",
	color: "rgb(153,153,153)"
}

const SideBar = () => {
			return (
				<Styleside>
					<UserTopHeader/>
					<input style={inputbox} placeholder="Search..." type="search"/>	
					
					<SideButton>
						<FA name="dashboard" style={fontawestyle}/> Dashboard
					</SideButton>
					
					<SideButton> 
						<FA name="envelope" style={fontawestyle}/>      Mailbox 
					</SideButton>
					
					<SideButton>
						<FA name="photo" style={fontawestyle}/>  Gallery
					</SideButton>
					
					<SideButton>
						<FA name="share-alt" style={fontawestyle}/> 
						<span> Social</span>
					</SideButton>

					<SideButton>
						<FA name="file-text-o" style={fontawestyle}/>
						<span> Blog</span>
					</SideButton>
					
					<hr style={hrstyle}/>	
					
					<SideButton> 
						<FA name="database" style={fontawestyle}/>
						<span> Panel</span>
					</SideButton>
					
					<SideButton>
						<FA name="bar-chart" style={fontawestyle}/>
						<span> Charts</span>
					</SideButton>
					
					<SideButton>
						<FA name="clock-o" style={fontawestyle}/>
						<span> Static Timeline</span>
					</SideButton>
					
					<SideButton>
						<FA name="sliders" style={fontawestyle}/>
						<span> Interactive</span>
					</SideButton>
					
					<SideButton> 
						<FA name="code" style={fontawestyle}/>
						<span> Codemirror</span>
					</SideButton>
					
					<SideButton>
						<FA name="map-marker" style={fontawestyle}/>
						<span> Maps</span>
					</SideButton>
					
					<SideButton>
						<FA name="edit" style={fontawestyle}/>
						<span> Editor</span>
					</SideButton>

				</Styleside>
			);	
}		

export default SideBar;
