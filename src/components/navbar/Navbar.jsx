function Navbar() {
  return (
    <ul className="nav-tabs">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#projectsTab">Projects</a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#skillsTab">Skills</a></li>
    </ul>
  );
}

export default Navbar;