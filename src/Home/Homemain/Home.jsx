import { useEffect } from "react";
import withLoader from "../Loader/withLoader.jsx";
import { useSelector, useDispatch } from 'react-redux';
import {setPrivilege} from '../../Store/accessReducer'; // Ensure the correct path to accessReducer
import Adminhome from "../Admin/Adminhome";
import Publichome from "../Publicaccess/Publichome";

function Home() {
  
  const dispatch = useDispatch();
    
  useEffect(() => {
    const privilege = sessionStorage.getItem('privilege'); 
    if (privilege) {
      dispatch(setPrivilege(privilege));
    }
  }, [dispatch]);
  

  const accessLevel = useSelector((state) => state.access.privilege);
  const homeselector = document.querySelector("body"); 
  homeselector.style.cssText = "display: block;";
  const sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      window.location.href = '/userauthenication';
    }
  
  
  return (
    <div className="homepage">
      
      <span>{ sessionId  ? <span>{ accessLevel === "admin" ? <Adminhome /> : <Publichome />}</span> :<p></p>}</span>
    </div>
  );
}

export default withLoader(Home);
//new