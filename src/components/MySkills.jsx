import React from 'react';
import root from "../root";
import Title from './Title';
import Skills from './Skills';
import About from './About';
import Buttons from './Buttons';

function MySkills(){
    function showHomePage(){
        root.render(
            <React.StrictMode>
                <Title/>
                <Skills/>
                <About/>
                <Buttons/>
            </React.StrictMode>
        );
    }

    return(
        <div>
            <div className='arrow'>
                <svg onClick={showHomePage} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg>
            </div>
            <div id="front">
                <h2>Front</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div id="back">
                <h2>Back</h2>
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                </ul>
            </div>
            <div id="database">
                <h2>Database</h2>
                <ul>
                    <li>MySQL</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                </ul>
            </div>
            <div id="git">
                <h2>Version Control</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </div>
            <div id="system">
                <h2>Operating System</h2>
                <ul>
                    <li>Windows</li>
                    <li>MacOS</li>
                </ul>
            </div>
        </div>
    );
}

export default MySkills;