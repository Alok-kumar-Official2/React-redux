import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MyProduct = () => {
    // const allproduct = useSelector(state => state.ProductList);
    
    // let [pname, setPname] = useState("");
    // let [cost, setCost] = useState("");
    // let [seller, setSeller] = useState("");
    // let [index,setindex] = useState("noindex");
    

     

    // const dispatch = useDispatch();

    // const save = (frmobj) => {
    //     frmobj.preventDefault();
    //     let newproduct = { "pname": pname , "cost" : cost, "seller" : seller}
    //     if(index =="noindex"){
    //         let mydata = { newproduct: newproduct, type: "addproduct" };
    //         dispatch(mydata);
    //         frmobj.target.reset();
    //         setPname("");setSeller("");setCost("");
            

    //     }
    //     else{
    //         let mydata = { newproduct: newproduct, type: "editproduct" , index:index };
    //         dispatch(mydata);
    //         frmobj.target.reset();
    //         setPname("");setSeller("");setCost("");
    //         setindex("noindex");
           
    //     }

       
    // }

    // const editProduct = (index,prod) => {
    //     setindex(index);
    //     setPname(prod.pname);
    //     setCost(prod.cost);
    //     setSeller(prod.seller);
        

    // }

    // const delProduct = (index) => {
    //     let mydata = { productindex:index, type: "delproduct"};
    //     dispatch(mydata);
    // }

    // return (
    //     <div className="container mt-5">
    //         <div className="row">
    //             <div className="col-xl-12 text-center">
    //                 <h3> Manage Product : {allproduct.length} </h3>
    //                 <form onSubmit={save}>
    //                     <p> Enter Product Name : <input name="pname" onChange={ obj=>setPname(obj.target.value)} type="text" value={pname}  /></p>
    //                     <p> Enter Product Cost : <input name="cost" onChange={obj=>setCost(obj.target.value)} type="text" value={cost} /></p>
    //                     <p> Enter Product Seller : <input name="seller" onChange={obj=>setSeller(obj.target.value)} type="text" value={seller}/></p>
    //                     <button className="btn btn-primary"  > Save </button>
    //                 </form>
    //             </div>
    //         </div>

    //         <div className="row mt-5 text-center">
    //             <div className="col-xl-3"></div>

    //             <div className="col-xl-6">
    //                 <table className="table table-primary">
    //                     <thead>
    //                         <tr>
    //                             <th>Sl no.</th>
    //                             <th> Product name</th>
    //                             <th> Cost </th>
    //                             <th> Seller </th>
    //                             <th colSpan={2}> Action </th>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {
    //                             allproduct.map((product, index) => {
    //                                 return (
    //                                     <tr key={index}>
    //                                         <th> {index + 1} </th>
    //                                         <th> {product.pname}</th>
    //                                         <th> {product.cost}</th>
    //                                         <th> {product.seller}</th>
    //                                         <th> <button onClick={obj => editProduct(index, product)}>Edit</button> <button onClick={obj => delProduct(index)}> Delete </button></th>
    //                                     </tr>
    //                                 )
    //                             })
    //                         }
    //                     </tbody>
    //                 </table>
    //             </div>

    //             <div className="col-xl-3"></div>

    //         </div>

    //     </div>
    // )

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