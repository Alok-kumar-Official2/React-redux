const ProductList = ( state = [], action )=>{
    // let data = [ 
    //     {pname : "Apple", cost :300, seller: "Alex"},
    //     {pname : "Mango", cost :200, seller: "Punit"},
    //     {pname : "Banana", cost :500, seller: "Shyam"}
    // ];

    let data = Object.assign( [], state);

    if(action.type == "saveproduct"){
        data.push(action.pinfo);
    }

    if(action.type == "removeproduct"){
        data.splice(action.pindex,1);
    }

    if(action.type == "editproduct"){
        data[action.index] = action.newproduct;
    }
    
    return data;
}
export default ProductList;


 