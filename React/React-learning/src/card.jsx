import profilePic from './assets/pp.png';
function Card(){
return(
    <div className="card">
        <img className="card-image" src={profilePic} alt="Profile of Rijan Bhandari" />
        <h2 className="card-title"> Rijan Bhandari</h2>
        <p className='card-text'>Studying Computer Engineering</p>


    </div>

)
}
export default Card;