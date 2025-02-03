import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

const MyBook = ()=>{
let[allbook,setBook] = useState([]);
let[newbook,setNewbook] = useState("");

const dispatch = useDispatch();

const save = ()=>{
     
    setBook(allbook = [...allbook,newbook]);
    setNewbook("");
}
    return(
        <div className="container mt-5">
           
           <div className="row text-center">
                <h3> Manage Book : {allbook.length} </h3>
                <p> React Loose the current state if you go to other compomnent </p>
                <p>
                    Enter Book Name : <input type="text" className="m-3" value={newbook} onChange={obj=>setNewbook(obj.target.value)} />
                    <button className="btn btn-primary" onClick={save}> Save </button>
                </p>
           </div>

           <div className="row mt-5">
                {
                    allbook.map((book,index)=>{
                        return(
                            <div className="col-xl-2 " key={index}> 
                                <p className="p-3 bg-info text-white text-center"> {book} </p>
                            </div>
                        )
                    })
                } 
           </div>
        </div>
    )
}
export default MyBook;