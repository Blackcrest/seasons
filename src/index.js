import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    // Good place to do one-time setup
    constructor(props) {
        super(props);

        this.state = {
            lat: null,
            errorMessage: ''
        }
    }

    // Good place to do data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    // Good place to do more data loading when state/props change
    componentWillUpdate(){
        console.log("My component was just updated - it rerendered");
    }

    // Good place to clean up (especially for non-React stuff)
    // componentWillUnmount(){
    //     console.log("My component is now unmounted");
    // }

    // Just let this render JSX
    render() {
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }

        return <div>Loading</div>

    }
}

ReactDOM.render(
    <App />, document.querySelector('#root')
)