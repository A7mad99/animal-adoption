   import React from 'react';
   import {render} from 'react-dom'
   import Pet  from './pet';
   import SearchParams from "./SearchParams"

       const App = () =>{
        
        return(
            <div>
                <h1 id="important">Adopt me</h1>
                <SearchParams></SearchParams>
                
                {/* <Pet name="luna" animal="dog" breed="m"></Pet>
                <Pet name="pepper" animal="dog" breed="m"></Pet>
                <Pet name="jone" animal="dog" breed="m"></Pet> */}
            </div>
        )
    };

    render(
        <App/>,
        document.getElementById("root") 
    );
    