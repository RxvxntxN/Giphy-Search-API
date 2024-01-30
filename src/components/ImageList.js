import './ImageList.css'
import ImageShow from './ImageShow';

function ImageList( {giffy} ) {
  
  const renderedGifs = giffy.map((giff)=>{
    return <ImageShow key={giff.id} giff={giff}/>;
  });

  return<div className='image-list'>{renderedGifs}</div>
}

export default ImageList;
