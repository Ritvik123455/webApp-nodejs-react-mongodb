import React from "react";
import ChartGenerator from "./ChartGenerator.js";
import ChartListing from "./ChartListing.js";
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
                    <Route path="/chartListing" element={<ChartListing/>} />
                    <Route path="*" element={<h1>ERROR: PAGE NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
        );
    }
}