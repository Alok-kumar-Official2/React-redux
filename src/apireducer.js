const ApiList = ( state=[], action )=>{
    // let data = [ 
    //     {body : "dddd ddd d ffdf  dfdfdf dfsdsfssf sfsfsf"  },
    //     {body : "sfsdd sdsdffe sfsfs sfsffs sfsfwfs sfwfwf" },
    //     {body : "dfsfw sdwsds sfwscs dwscw sdwdsw wdwcw wdwdw" }
    // ];

    let data = Object.assign([], state);

    if( action.type === "saveblog"){
        data = action.blogdata
    }
    return data;
}
export default ApiList;