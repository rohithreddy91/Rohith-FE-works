const Contact = ()=>{
    return (
        <div>
            <h1 className="text-2xl font-bold p-4 m-4">Contact us</h1>
            <form>
                <input className="border border-black m-4" placeholder="Name"/>
                <input className="border border-black " placeholder="contact"/>
                <button className="border bg-gray-200 rounded-lg m-4 p-2">Submit</button>
            </form>
        </div>
    )
};
export default Contact;