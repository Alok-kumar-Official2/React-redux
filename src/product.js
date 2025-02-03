import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyProduct = () => {
    let [pdetails,setdetails] = useState({});
    let allproduct = useSelector( state => state.ProductList );


    let pickvalue = (obj)=>{
        pdetails[obj.target.name] = obj.target.value;
        setdetails(pdetails);

    }

    let dispatch = useDispatch();

    const save =(obj)=>{
        obj.preventDefault();
        let mydata = { type: "saveproduct", "pinfo": pdetails};
       dispatch(mydata);
        console.log(pdetails);

        obj.target.reset();
        alert("Product send to store")
        setdetails({});
    }

    const deletepro = (index)=>{
        let mydata = { type: "removeproduct", "pindex": index};
        dispatch(mydata);
    }

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Product </h3>
                    <form onSubmit={save}>
                    <p>
                        <input type="text " className="m-3" placeholder="Product Name " name="pname" onChange={pickvalue}/>

                        <input type="text " className="m-3" placeholder="Product Price " name="price" onChange={pickvalue}/>

                        <input type="text " className="m-3" placeholder="Product Quantity " name="qty" onChange={pickvalue}/>

                        <button className="btn btn-primary m-3"  > Save</button>
                    </p>
                    </form>
                   
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-xl-12 mb-4 text-center">
                   <h3 className="text-center"> Available Product in Store {allproduct.length} </h3> 
                </div>
                {
                    allproduct.map((product,index)=>{
                        return(
                            <div className="mb-4 col-xl-3" key={index}> 
                                <h5 className="text-primary "> {product.pname} </h5>
                                <h5> Rs.  {product.price} </h5>
                                <h5>  In Stock Quantity : {product.qty} </h5>
                                <button className="btn btn-danger btn-sm m-3" onClick={obj=>deletepro(index)} > Delete </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default MyProduct;
