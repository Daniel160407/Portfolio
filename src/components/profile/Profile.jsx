import Contact from "./Contact";
import PersonalInfo from "./PersonalInfo";

function Profile(){
    function download(){
        const link = document.createElement('a');
        link.href = '../public/files/Daniel Abulashvili - Resume.pdf';
        link.download = 'Daniel Abulashvili - Resume';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return(
        <div id="profile">
            <img id="profileImg" src="/images/profileImg.jpg" alt="pofileImg"></img>
            <h1>Daniel Abulashvili</h1><br/>
            <h5>Full Stack Developer</h5>
            <Contact/>
            <PersonalInfo/>
            <button onClick={download}>Download CV</button>
        </div>
    );
}

export default Profile;