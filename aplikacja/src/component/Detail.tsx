import React from 'react'
import { Link } from 'react-router-dom';

const Detail = (props: any) => {
    return (
    <div className="card">
      <img src="https://sp3glubczyce.pl/wp-content/uploads/2019/03/film-768x768.png" className="card-img-top" alt="zdj"></img>
      <div className="card-body">
            <h5 className="card-title">Tytuł filmu</h5>
        <p className="card-text">Szybki przykład opisu filmu ciekawy,dobre efekty specjalne, dobry kunszt</p>
      </div>
    </div>
    );

}
export default Detail;