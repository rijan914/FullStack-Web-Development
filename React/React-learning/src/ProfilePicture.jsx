import pic1 from './assets/pp.png';
function ProfilePicture(){
    const imageUrl = pic1;
    const handleClick =(e)=>e.target.style.display="none";
    
return(

    <img className='imageUrl' onClick={(e)=>handleClick(e)} src={imageUrl}></img>
)
}
export default ProfilePicture