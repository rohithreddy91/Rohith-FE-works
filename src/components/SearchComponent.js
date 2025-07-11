import{ useState } from "react";
const SearchComponent = (props) =>{

  const [searchText,setSearchText] = useState("") ;

  return (
    <div className="search-container"> 
      <input type="text" className="p-1 rounded-sm border-black focus:border-blue-500 border" value= {searchText} onChange={(e)=>{
        setSearchText(e.target.value);
      }}/>
      <button className = "px-4 py-2 bg-green-300 rounded-lg m-4" onClick={()=>{
        const filteredList = props.resultData.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        props.res1(filteredList);
      }}>Search </button>
    </div>
  )
}
export default SearchComponent;