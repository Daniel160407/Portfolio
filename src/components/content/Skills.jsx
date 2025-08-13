import React from 'react';
function Skills(){
    return(
        <div id='skillsTab' className='tab-pane fade'>
            <div id='skills'>
            <div className='skill'>
                <h2>Front</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React.js</li>
                    <li>Vue.js</li>
                    <li>HTML</li>
                </ul>
            </div>
            <div className='skill'>
                <h2>Back</h2>
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>C#</li>
                    <li>C</li>
                    <li>Node.js</li>
                </ul>
            </div>
            <div className='skill'>
                <h2>Style</h2>
                <ul>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Tailwind</li>
                </ul>
            </div>
            <div className='skill'>
                <h2>Database</h2>
                <ul>
                    <li>MySQL</li>
                    <li>Docker</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className='skill'>
                <h2>Version Control</h2>
                <ul>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </div>
            <div className='skill'>
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

export default Skills;