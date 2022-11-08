import React from "react";
import { useState } from "react";

const SearchBar = ({getKeyword})=>{

    const [value,setValue] = useState();
    const valueChange = (e)=>{
        
        setValue(e.target.value)
    }
    const click= (e)=>{
        e.preventDefault()
        getKeyword(value)
    }
    
    return(
        <>
        <div className="bg-primary text-white d-flex flex-row p-1 ">
            <span className="badge text-center m-2">Search Ad</span>
            <form className="p-2 search d-flex justify-content-center flex-grow-1" onSubmit={click}>
                <input type ="text" className="form-control" id="searchInput" name="inputKey" onChange={(e)=>valueChange(e)}/>
                <button type="submit" className="searchbtn"><i className="bi bi-search"></i></button>
            </form>
        </div>
        </>
    )
}

export default SearchBar;