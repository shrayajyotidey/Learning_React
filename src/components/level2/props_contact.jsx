    function Card(props){
        return <div>
    <h2>{props.name}</h2>
    <img
      src= {props.imgLink}
      alt="avatar_img"
    />
    <p>{props.cn}</p>
    <p>{props.email}</p>
    </div>
    }



function Contacts_Props(){
    return <div>
          <h1>My Contacts</h1>
    <Card name= "Beyonce" imgLink= "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    cn= "+123 456 789" email= "b@beyonce.com"/>

    <Card name= "Jack Bauer" imgLink= "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
     cn= "+987 654 321" email= "jack@nowhere.com" />

    <Card name ="Chuck Norris" imgLink = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
     cn = "+918 372 574" email = "gmail@chucknorris.com"  />
  </div>
}

export default Contacts_Props;
