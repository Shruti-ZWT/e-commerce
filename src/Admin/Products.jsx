import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "../Navbar";
import { Link, useNavigate } from 'react-router-dom';

export default function Product(){
    const navigator = useNavigate();
    const [product , setProduct] = useState([]);
    const [loading , setLoading] = useState(false);

    const url = "https://fakestoreapi.com/products"
    useEffect(() => {
        setLoading(true);
        axios.get(url).then(res => setProduct(res.data))
        console.log(product);
        setLoading(false);
    } , [])



    const setEditData = (id) => {
        console.log("id" , {id})
        localStorage.setItem('ID', id)
    }
    return(
        <>
        <Navbar/>
        <h1 style={{textAlign: "center"}}>PRODUCTS</h1>
        <Link to="/add">
        <button> Add New </button> 
        </Link>
        <button onClick={() => (navigator("/"))}>Back</button>  

        <table >
            <thead>
                <tr>
                    <th>ID:-</th>
                    <th>Title:- </th>
                    <th>Pirce:</th>
                    <th>Description</th>
                    <th>Rating</th>
                    <th>Action</th>
                </tr>
            </thead>
            
        <tbody>
        {
            loading ? <h1> Data is fetching, Please Wait for a while!!! </h1> :
            (
                product.map((products , index) => (
                    
                            <tr key={index}>
                                <td>{products.id}</td>
                                <td>{products.title}</td>
                                <td>{products.price}</td>
                                <td>{products.description}</td>
                                <td>Rate:- {products.rating.rate} <br/> count:-{products.rating.count}</td>
                                <td>
                                    <div>
                                     <Link to="/edit">
                                    <button onClick={() => setEditData(products.id)}>Edit</button>
                                    </Link>   
                                    <Link to="/delete">
                                    <button>Delete</button>
                                    </Link>
                                    </div>
                                </td>
                                {/* <td className="contain">
                                <img src={product.image} alt="images"
                                className="productimage" onClick={descrip}/>
                                <div className="middle">
                                <div className="text">
                                    Category:- {product.category}
                                </div>
                                </div>
                                 </td> */}
                            </tr>
                )
                )
            )
        }
        </tbody>
        {/* </div> */}
        
        </table>
        </>
    )
}