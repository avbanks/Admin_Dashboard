import React, { Component } from 'react';
import styled from 'styled-components';
import SideBar from './comps/sidebar';
import { injectGlobal } from 'styled-components';
import TopNavBar from './comps/topnavbar';
import MainArea from './comps/mainarea';
import tri from './fonts/tri.ttf';


const wrapperstyle = {
	display: "flex",
	height: "100%"
}

const columnwrap = {
	display:"flex",
	flexDirection: "column",
	width: "100%"
}


class App extends Component {
	  render() {
			    return (
									<div style={wrapperstyle}>
										<SideBar />	
										<div style={columnwrap}>
											<TopNavBar />
											<MainArea></MainArea>
										</div>
									</div>
						    );
			  }
}

injectGlobal`
	@font-face{
		font-family: "tri";
		src: url('${tri}');
	};
	html {
		height: 100%;
	};
	body {
		height: 100%;
	};
	#root {
		height: 100%
	}
`
export default App;
