
const UserList = ( state = [] , action)=>{
   // let data = ['Alex', 'Mohit','Punit'];
    let data =  Object.assign( [], state);

    if(action.type === "adduser"){
        data.push( action.username)
    }

    if(action.type === "removeuser"){
        data.splice( action.userindex,1);
    }
    return data;
}
export default UserList;