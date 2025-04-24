import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path='/'>
                        <h1>Hello from Homepage!</h1>
                    </Route>
                    <Route path='/chartListing'>
                        <h1>Hello from chartlisting!</h1>
                    </Route>
                    <Route>
                        <h1>ERROR:PAGE NO FOUND</h1>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}