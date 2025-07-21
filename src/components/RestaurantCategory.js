import ItemList from "./ItemList";
const RestaurantCategory = ({data,showItems,setShowItems})=>{

    const handleClick = () => {
        setShowItems();
    }
    return(
        <div>
            <div className ="p-4 mx-auto shadow-lg bg-gray-200 rounded-lg my-4 w-6/12">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>

                <span className="font-bold text-lg">
                    {data?.title}({data?.itemCards?.length})
                </span>
                <span>
                    ⬇️
                </span>
                </div>
                  {showItems && <ItemList list={data?.itemCards}/>}
            </div>
            {/* <div>
                image
            </div> */}
        </div>
    )
};
export default RestaurantCategory;