import React from 'react';

import PrivateHeader from './PrivateHeader';

export default  class Link extends React.Component {
	constructor(props) {
			super(props);
			this.state = {
				label: ''
			}
		}	
	render() {
		return (
			<div>				
				<PrivateHeader title="Dashboard"/>	
				<div className="page-content">
					Dashboard page content.
				</div>											
			</div>
			)	
	}
}