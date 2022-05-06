import {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const NavBar = (props:any) => {

    const history = useHistory();
    const authCtx = useContext(AuthContext);	
    const isLoggedIn = authCtx.isLoggedIn;

    const logoutHandler = () => {
            // Call the logout function in authCtx to reset the token into an empty string
            authCtx.logout();
            // Redirect the user
            history.replace('/login');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link to={"/login"}><div className="nav-link active">Login</div></Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link to={"/home"}><div className="nav-link active">Home</div></Link>
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link to={"/projectoverview"}><div className="nav-link active">ProjectOverview</div></Link>
                                </li>
                                <li className="nav-item dropdown">
                                   
                                    <Link to={"/profile"}><div className="nav-link active">Profile</div></Link>
                                </li>
                                {/* {isProject1 && ( */}
                                {/* )} */}
                                {/* {isProject2 && ( */}
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link to={"/projectindividual"}><div className="nav-link active">ProjectIndividual2</div></Link>
                                </li>
                                {/* )} */}
                                {/* {isProject3 && ( */}
                                <li className="nav-item">
                                    {/* <a className="nav-link" href="#">Link</a> */}
                                    <Link to={"/projectindividual"}><div className="nav-link active">ProjectIndividual3</div></Link>
                                </li>
                                {/* )} */}
                            

                            

                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            {props.children}
        </div>
    )
}

export default NavBar