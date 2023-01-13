import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import { Link} from 'react-router-dom';


function Edit(){
  console.log("vchscsx");
    const [title , setTitle] = useState("");
    const [price , setPrice] = useState("");
    const [description , setDescription] = useState("");
    const [category , setCategory] = useState("");
    const [id , setId] = useState("");


// console.log(title , "title" , price , "price" , description , "description");



const Update = () => {
    axios.put("https://fakestoreapi.com/products/${id}" , {
        title , 
        price ,
        description,
        category
    })
}

useEffect(() => {
    setTitle(localStorage.getItem('title')) ;
    setPrice(localStorage.getItem('price')) ;
    setDescription(localStorage.getItem('description')) ;
    setCategory(localStorage.getItem('category')) ;
    setId(localStorage.getItem('id')) ;
 } , [])
    return (
        <>
        <Navbar/>
        <h1 style={{textAlign: "center"}}>Add New Item Details</h1>
        <div className="addcontainer">
        <h2>Title</h2>

        <input
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add New Title"
        required
        />
        <h2>Price</h2>
        <input
        value={price}
        placeholder="Enter Price"
        name="price"
        type = "number"
        onChange={(e) => setPrice(e.target.value)}
        required
        />
        <h2>Decription</h2>
        <textarea
        type="textarea"
        value={description}
        name="description"  rows="10"
        placeholder = "Enter the Description"
        onChange={(e) => setDescription(e.target.value)}
        required
        />
        <h2>Category</h2>
        <input
        type="text"
        value={category}
        name="category"
        placeholder = "Category"
        onChange={(e) => setCategory(e.target.value)}
        required
        />
        <Link to="/products">
        <button onClick={Update} className="addbtn">Edit</button>
        </Link>
        </div>
        
        </>
     
        
    )
}

export default Edit;


 {/* <input/>
    //     nmae="title"
    //     onChange={(e) => setTitle(e.target.value)}
    //     placeholder="Add New Title"
    //   />
    //   <p>Price</p>
    //   <input
    //     placeholder="Enter Price"
    //     name="price"
    //     type = "number"
    //     onChange={(e) => setPrice(e.target.value)}
    //   />
    //   <p>Decription</p>
    //   <input
    //   type="textarea"
    //   name="description"
    //   placeholder = "Enter the Description"
    //   onChange={(e) => setDescription(e.target.value)}
    //   />
    //   <p>Category</p>
    //   <input
    //   type="text"
    //   name="category"
    //   placeholder = "Category"
    //   onChange={(e) => setCategory(e.target.value)}
    //   />
    //   <button onClick={Add}>Add</button>
    //   <Read/> */}
























// import Navbar from "../../Navbar"

// export default function Edit(){
//     return(
//         <>
//         <Navbar/>
//         <h1>EDIT</h1>
//         <h1 style={{textAlign: "center"}}>Add New Item Details</h1>
//         <div className="addcontainer">
//         <h2>Title</h2>

//         <input
//         name="title"
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Add New Title"
//         required
//         />
//         <h2>Price</h2>
//         <input
//         placeholder="Enter Price"
//         name="price"
//         type = "number"
//         onChange={(e) => setPrice(e.target.value)}
//         required
//         />
//         <h2>Decription</h2>
//         <textarea
//         type="textarea"
//         name="description"  rows="10"
//         placeholder = "Enter the Description"
//         onChange={(e) => setDescription(e.target.value)}
//         required
//         />
//         <h2>Category</h2>
//         <input
//         type="text"
//         name="category"
//         placeholder = "Category"
//         onChange={(e) => setCategory(e.target.value)}
//         required
//         />
//         <Link to="/products">
//         <button onClick={Add} className="addbtn">Add</button>
//         </Link>
//         </div>
        
        
        
//         </>
//     )
// }