import React from "react";
import ChartGenerator from "./ChartGenerator.js";
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
                    <Route exact path="/" element={<ChartGenerator />}>
                    </Route>
                    <Route path="/chartListing" element={<h1>Hello from chartlisting!</h1>} />
                    <Route path="*" element={<h1>ERROR: PAGE NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
        );
    }
}