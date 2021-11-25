import React from 'react'

const Footer = (props: any) => {
    return (
        <div className="container">
             <footer className="py-3 my-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Strona główna</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Szukaj</a></li>
                  <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Zaloguj</a></li>

                </ul>
                <p className="text-center text-white">© 2021 FILMOVELOVE, Inc</p>
             </footer>
        </div>
    );
}
export default Footer;


