import React from 'react';
import root from "../root";
import Projects from './Project';
import MySkills from './MySkills';

function Buttons(){
    function showProjects(){
        root.render(
            <React.StrictMode>
                <Projects/>
            </React.StrictMode>
        );
    }

    function showSkills(){
        root.render(
            <React.StrictMode>
                <MySkills/>
            </React.StrictMode>
        );
    }

    return(
        <div id='buttons'>
            <button onClick={showProjects}>- PROJECTS</button>
            <button onClick={showSkills}>- MY SKILLS</button>
        </div>
    );
}

export default Buttons;