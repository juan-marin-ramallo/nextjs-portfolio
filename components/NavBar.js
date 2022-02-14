import Link from "next/link"

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link href="//">
        <a className="navbar-brand">Personal Portfolio</a>
    </Link>    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarColor03" aria-controls="navbarColor03" 
    aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="d-flex" id="navbarColor03">
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
            <Link  href="https://app.pluralsight.com/profile/ozurajean">
                <a target="_blank" className="nav-link">Skills</a>            
            </Link>
        </li>
        <li className="nav-item">
            <Link  href="/experience">
                <a className="nav-link">Experience</a>            
            </Link>          
        </li>
        <li className="nav-item">
            <Link  href="/projects">
                <a className="nav-link">Projects</a>            
            </Link>
        </li>   
        <li className="nav-item">
            <Link  href="/contactme">
                <a className="nav-link">Contact me</a>            
            </Link>
        </li>   
        <li className="nav-item">
            <Link  href="/resume">
                <a className="nav-link">Resume</a>            
            </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

)


export default NavBar;