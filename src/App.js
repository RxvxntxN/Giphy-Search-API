import { useState } from "react";
import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";

function App() {

  const [gif , setGif] = useState([]);

  const handleSubmit = async (term) => {
    //console.log('Do a search with',term);
    const result = await searchImages(term);

    setGif(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList giffy={gif}/>
    </div>
  );
}

export default App;
