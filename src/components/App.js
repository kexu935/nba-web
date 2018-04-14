import React, { Component } from 'react';
import { TopNavBar } from './TopNavBar';
import { Main } from './Main';

class App extends Component {
    componentDidMount() {
        document.title = 'NBA Player Stats'
    }

    render() {
        return (
            <div className="App">
                <TopNavBar/>
                <Main/>
            </div>
        );
    }
}

export default App;
