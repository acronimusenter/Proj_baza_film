import React from 'react'
import { Link } from 'react-router-dom';
const Banner = (props: any) => {
    return (<nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/"><a className="navbar-brand"><img src="https://www.pngfind.com/pngs/m/692-6925042_transparent-icon-video-png-logo-video-3d-png.png" alt="" width="30" height="30"></img>FILMOVELOVE</a></Link>

                      <Link to="/add"><button className="btn btn-dark me-3">Dodaj film</button></Link>

                      <Link to="/signin"><button className="btn btn-dark me-3" >Zaloguj</button></Link>

                      <Link to="/signup"><button className="btn btn-dark me-3" >Zarejestruj</button></Link>

                </nav>
    );
}
export default Banner;