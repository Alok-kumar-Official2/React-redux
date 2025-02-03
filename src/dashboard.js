 import { useSelector } from "react-redux";


const MyDashboard = ()=>{
    let alluser = useSelector( state => state.UserList );
    let allproduct = useSelector( state => state.ProductList );
    let allapi = useSelector( state => state.ApiList );

    return(
        <div className="cotainer mt-4">
            <div className="row">
                <div className="col-xl-12 text-center">
                <h3> React & Redux Dashboard </h3>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-4 text-center">
                    <div className="p-4 bg-light text-primary"> 
                        <h3> {alluser.length} User in Store</h3>
                        {
                            alluser.slice(0,4).map((fullname,index)=>{
                                return(
                                    <p key={index}> {fullname} </p>
                                )
                            })
                        }
                        
                    </div>
                </div>
                <div className="col-xl-4 text-center">
                    <div className="p-4 bg-light text-primary"> 
                        <h3> {allproduct.length} Product in Store</h3>
                        {
                            allproduct.slice(0,4).map((product,index)=>{
                                return(
                                    <p key={index}> {product.pname} </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="col-xl-4 text-center">
                    <div className="p-4 bg-light text-primary"> 
                        
                        <h3> {allapi.length} Api record in Store</h3>
                        {
                             allapi.slice(0, 4).map((blog, index)=>{
                                return(
                                    <p key={index}> {blog.body.slice(0,100)} </p>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default MyDashboard;