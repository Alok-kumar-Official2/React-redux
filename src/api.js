import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Myapi = () => {
    let [bloglist, setBlog] = useState([]);
    const getBlog = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(blogarray => {
                setBlog(blogarray);
            })
    }

    useEffect(() => {
        getBlog();
    }, []);

    let dispatch = useDispatch();
    const save = () => {
        let mydata = { type: "saveblog", blogdata: bloglist };
        dispatch(mydata);
        alert("Records send to store");
    }

    // return (
    //     <div className="container mt-5">
    //         <div className="row">
    //             <div className="col-xl-12 text-center">
    //                 <h3> Manage Api : {bloglist.length} </h3>
    //                 <button className="btn btn-primary" onClick={save}> Save in Store </button>
    //             </div>
    //         </div>
    //         <div className="row, mt-5">
    //             {
    //                  bloglist.map((blog, index) => {
    //                     return (
    //                         <div className="col-xl-3 mb-4" key={index}>
    //                             <p className="p-4 bg-light rounded"> {blog.body} </p>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     </div>
    // )

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-12 text-center">
                    <h3> Manage Api : {bloglist.length} </h3>
                    <button onClick={save} className="btn btn-primary"> Save in Store </button>
                </div>
            </div>
            <div className="row mt-5">
                {
                    bloglist.map((blog, index) => {
                        return (
                            <div className="col-xl-3 mb-4" key={index}>
                                <p className="p-4 bg-light rounded"> {blog.body} </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Myapi;