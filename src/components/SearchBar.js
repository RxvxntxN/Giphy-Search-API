import './SearchBar.css';
import { useState } from "react";

function SearchBar({onSubmit} ) {

  const [term,setCamshot] = useState(''); 
  
  const handleFormSubmit=(balls)=>{
    balls.preventDefault();
    //console.log('I need to tell parent some datas');
    onSubmit(term);
  };
  const handleChange = (balls) =>{
    setCamshot(balls.target.value);
  };

  return (<div className='search-bar'>
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleChange} />
    </form>
  </div> );
}

export default SearchBar;
