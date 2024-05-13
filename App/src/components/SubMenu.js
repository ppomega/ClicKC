import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
function Submenu(props){

const [t,setT]=useState(false);
const [ct,setCT]=useState(null);


if(ct.toLowercase()==props.data?.category.toLowercase()){
    if(t){
    return(<div>{props.data?.name}</div>);}
}
else{setCT(props.data?.category)
    setT(true);
    return(<><div className="font-integral">{props.data?.category}</div>
    <div>{props.data?.name}</div></>)}

}

export default Submenu;




















