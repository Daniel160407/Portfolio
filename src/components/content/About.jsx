function About() {
    return (
        <div id="about" className="tab-pane fade show active">
            <h1>About</h1><br/>
            <div className="paragraph-container">
                <div className="paragraph-title">About me</div>
                <div className="paragraph-text">Passionate about programming, I thrive on tackling challenges and am eager to join a development company. My punctuality, dedication, and curiosity drive me to master new skills effortlessly.
                </div>
            </div>
            <div className="paragraph-container">
                <div className="paragraph-title">Me and my projects</div>
                <div className="paragraph-text">
                    I have created about 50 projects under my belt using a deep knowledge in Java, MySQL (and other databases) and React.js I’m currently working on various business startup projects.
                </div>
            </div>
            <div className="paragraph-container">
                <div className="paragraph-title">Education</div>
                    <div className="paragraph-text">I have studied 3 years at programming school Mziuri and I`m already certified. 
                        Alongside my lessons at this school, I developed myself further, which provided me the opportunity to work on large-scale projects.
                </div>
            </div>
            <div className="paragraph-container">
                <div className="paragraph-title">Languages</div>
                <div className="paragraph-text">I know several languages: Georgian - Native, Russian - C1, English - B2, German - B2.</div>
            </div>
        </div>
    );
}

export default About;