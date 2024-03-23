import React from 'react';
function MySkills(){
    return(
        <div id='skillsTab' className='tab-pane fade'>
            <div id='skills'>
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
                    <li>MongoDB</li>
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
        </div>
        
    );
}

export default MySkills;