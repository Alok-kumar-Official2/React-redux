import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


const MyUser = ()=>{
    let alluser = useSelector( state => state.UserList );
    let [fullname,setName] = useState("");

    const dispatch = useDispatch();
    const save = ()=>{
        //alert(fullname);
        let mydata = { username:fullname, type:"adduser"};
        dispatch(mydata);
        setName("");
    }
    const deluser = (index)=>{
        let mydata = { userindex:index, type:"removeuser"};
        dispatch(mydata);
    }
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                <h3> Manage User : {alluser.length} </h3>
                <p>
                    Enter Full Name : <input type="text" className="m-3" value={fullname} onChange={obj=>setName(obj.target.value)} />
                    <button className="btn btn-primary m-3" onClick={save}> Save </button>
                </p>
                </div>
            </div>
            
            <div className="row mt-5 text-center">
                {
                    alluser.map((fullname,index)=>{
                        return(
                            <div className="col-xl-2 " key={index}> 
                                <p className="p-3  "> {fullname} </p>
                                <button onClick={obj=>deluser(index)} className="btn btn-danger btn-sm"> Delete </button>
                            </div>
                        )
                    })
                } 
           </div>

        </div>
    )
}
export default MyUser;