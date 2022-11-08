import React,{useState} from 'react';
import './App.css';
import AdCard from './components/AdCard';
import AdgridBar from './components/Adgridbar';
import SearchBar from './components/SearchBar';

const App=()=> {
  const [keyword, setKeyword] = useState();
  return (
   
    <>
    <SearchBar getKeyword = {setKeyword}/>
    <AdgridBar keyword = {keyword}/>
    
    </>
  );
}

export default App;
