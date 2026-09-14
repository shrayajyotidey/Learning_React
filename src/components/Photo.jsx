    import '../App.css'
    const randomImgUrl = 'https://picsum.photos/200'; //lorem picsum 

    function Photo(){
    return <div>
      <h1 className='heading'>The Pictures</h1>
      <div className='container'>
        <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zDMYnGheNT1l7pEW3R5N3Uf4--yCjRprCG9W5WQ58g&s=10' alt='Tiger Image' />
        <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAC1kBFD8UgsOayMBHWl9pktJkSO1BuY7ZpdVGmLUMg&s=10' alt='Scenary Image' />
        <img className='photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDSwQeYsy-xxMqXYaRUCU1BCqvSA0Y3pg20bi9UtO-Kg&s=10' alt='Human Image' />
        <img className='photo' src={randomImgUrl} alt='Random Image' />
        <img className='photo' src={randomImgUrl + "?grayscale"} alt='Random Gray Image' />
      </div>
    </div>;
    }

    export default Photo;