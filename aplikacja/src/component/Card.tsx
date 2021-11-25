import React from 'react'


const Card = (props: any) => {
    return (
    <div className="card">
      <img src="https://sp3glubczyce.pl/wp-content/uploads/2019/03/film-768x768.png" className="card-img-top" alt="zdj"></img>
      <div className="card-body">
            <h5 className="card-title">Tytuł filmu</h5>
        <p className="card-text">Szybki przykład opisu filmu ciekawy,dobre efekty specjalne, dobry kunszt</p>
        <a href="#" className="btn btn-primary">Zobacz więcej</a>
      </div>
    </div>
    );

}
export default Card;