import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Card(props) {
  return (
    <>
      <div className="card">
        <img src={props.imgsrc}
          alt="Mirjapur"
          className="img" />
        <p>amazon prime original series</p>
        <h2>{props.sname}</h2>
        <button><a href={props.slink} target="_blank">Watch now</a></button>
      </div>

    </>

  );
}

ReactDOM.render(
  <>
    <header>
      <div className="header">
        <p> top amazon series</p>
      </div>
    </header>
    <section className="background">
      <div className="left">

      </div>
      <div className="right">

      </div>
    </section>
    <section>
      <div className="cards">
        <Card imgsrc="https://wallpapercave.com/wp/wp7285321.jpg"
          sname="MIRZAPUR"
          slink="https://www.amazon.com/Mirzapur-Season-1/dp/B07JJ5R12F"
        />

        <Card imgsrc="https://wallpapercave.com/wp/wp3049506.jpg"
          sname="Hannah Baker"
          slink="#"
        />


        <Card imgsrc="https://wallpapercave.com/wp/wp4705444.jpg"
          sname="The Terror"
          slink="https://www.primevideo.com/detail/The-Terror/0R5LQART2MFFBK75MSR4T8HIPV"
        />


        <Card imgsrc="https://wallpapercave.com/wp/wp7268673.jpg"
          sname="The Walking Dead"
          slink="https://www.primevideo.com/detail/The-Walking-Dead/0GZ2JNU60L78HV3EY2NIW330A9"
        />

        <Card imgsrc="https://wallpapercave.com/wp/wp3067714.jpg"
          sname="The Expanse"
          slink="https://www.primevideo.com/detail/The-Expanse/0MW6F85MD8486AE43GONNOR5F1"
        />


        <Card imgsrc="https://wallpapercave.com/wp/wp2203946.jpg"
          sname="NCIS"
          slink="https://www.amazon.com/NCIS-Season-18/dp/B08N5YFWCQ"
        />

        <Card imgsrc="https://wallpapercave.com/wp/wp6559368.jpg"
          sname="Jack Ryan"
          slink="https://www.amazon.com/gp/video/detail/B073RPZK88/ref=atv_dp_season_select_s1"
        />

       

      </div>

    </section>

  </>
  , document.getElementById('root')
);