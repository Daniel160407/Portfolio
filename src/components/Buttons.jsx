import React from 'react';
import root from "../root";
import Projects from './Project';

function Buttons(){
    function showProjects(){
        root.render(
            <React.StrictMode>
                <Projects/>
            </React.StrictMode>
        );
    }

    return(
        <div>
            <button id="projects" onClick={showProjects}>My Projects</button>
        </div>
    );
}

export default Buttons;