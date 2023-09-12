import { Outlet, Link } from "react-router-dom";
import './Layout.css'
import MasterPiece from "../MasterPiece/MasterPiece";
import Cards from "../Cards/Cards";
import Bestcardscontainer from '../Bestcards/Bestcardscontainer'
import Wraprounded from "../Wraprounded/Wraprounded";
import Playcardcontainer from "../Playcardcontainer/Playcardcontainer";
import Details from "../Details/Details";
import Partnetship from "../../Layoutone/Partnership";

const Layout = () => {
    return (
        <>
            <div className="pro-container">
                <nav>
                    <div className="nav-container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="container">
                                    <div className="row justify-content-md-center">
                                        <div className="col col-lg-4">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                                                    <Link className="nav-link" to="/Logo">Logo</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col col-lg-8">
                                        <div className="row justify-content-md-center">
                                            </div>
                                            <ul  className="nav-bar-list">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Pages">Pages</Link>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <Link className="nav-link" to="/Feature">Feature</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Service">Services</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" to="/Blog">Blog</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" to="/Contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>
                </nav>
                <MasterPiece />
            </div>
            <Cards />
            <Bestcardscontainer/>
            <Wraprounded/>
            <Playcardcontainer/>
            <Partnetship/>
            <Details/>

            <Outlet />
        </>
    )
};

export default Layout;