import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
//import component
import DocumentList from "./components/document-list.component";


function App() {
  return (
    <Router>
     
        <Route path="/" exact component={DocumentList} />
 
    </Router>
  );
}

export default App;
