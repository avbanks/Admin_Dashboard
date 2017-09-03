import React from 'react';
import styled from 'styled-components';
import Panel from './panel';


const MainWrapper = styled.div`
	display: flex;
	background-color: rgb(233,240,245);
	width: 100%;
	height: 100%;
	flex-flow: row wrap;
`

const MainArea = (props) => {
	return(
		<MainWrapper>
			<Panel/>	
			<Panel/>
			<Panel/>
		</MainWrapper>
	)
}

export default MainArea
