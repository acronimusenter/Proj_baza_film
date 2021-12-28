import React from 'react'
import { Link } from 'react-router-dom';

const Regist = (props: any) => {
    return (
    <div className="container p-3">
    <div className="col">
    <form className="row g-3">
        <div className="mb-3 row">
          <label htmlFor="staticLogin" className="col-sm-2 col-form-label">Login</label>
          <div className="col-sm-10">
            <input type="Login"  className="form-control" id="Login"></input>
          </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="staticName" className="col-sm-2 col-form-label">Nazwa</label>
               <div className="col-sm-10">
               <input type="Name"  className="form-control" id="Name"></input>
            </div>
           </div>
           <div className="mb-3 row">
             <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                 <div className="col-sm-10">
               <input type="Email"  className="form-control" id="Email"></input>
            </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Hasło</label>
          <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword"></input>
          </div>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Zarejestruj</button>
         </div>
         </form>
        </div>
    </div>
    );

}
export default Regist;