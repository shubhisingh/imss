import React, {Component} from 'react';

const asyncHOC = (loadComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {Component: null};
		}
		componentDidMount() {
			loadComponent()
			.then(c => this.setState({Component: c.default}));
		}
		render() {
			let Component = this.state.Component;
			return Component ? <Component {...this.props} /> : <div>Loading...</div>;
		}
	}
}
export default asyncHOC;