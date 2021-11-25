import React from 'react'

const Banner = (props: any) => {
    return (<nav className="navbar navbar-light bg-secondary">
              <div className="container-fluid">
                <a className="navbar-brand"><img src="https://www.pngfind.com/pngs/m/692-6925042_transparent-icon-video-png-logo-video-3d-png.png" alt="" width="30" height="30"></img>FILMOVELOVE</a>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Wpisz szukaną fraze" aria-label="Search"></input>
                  <button className="btn btn-dark" type="submit">Szukaj</button>
                </form>
                <button className="btn btn-dark" >Zaloguj</button>
              </div>
            </nav>
    );
}
export default Banner;