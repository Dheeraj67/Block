import profile from './assets/yoshi.jpg'

function Card(){
    return(
        <div className = "card">
            <img className="pic1" src={profile} alt="" />
            <h2 className="card-title">Ronin meow</h2>
            <p className='card-para'>I make Yotube vids</p>
        </div>
    );
}

export default Card