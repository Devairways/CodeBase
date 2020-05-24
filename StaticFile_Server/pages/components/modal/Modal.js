import React, { useEffect, useState } from  "react";
import LoginCard from "./login";
import RegisterCard from "./register";

const Modal = ({ type, close })=>{
	const [modalType, setModalType] = useState("");
   
	useEffect(()=>{
		setModalType(type);
	},[])
	
    
	return(
		<div id="overlay">
			<div id="modal">
			{
				modalType == "login" && <LoginCard setModalType={setModalType} close={close} />
			}
			{
				modalType == "register" && <RegisterCard setModalType={setModalType} close={close} />
			}
			</div>
		</div>
		
	);
}

export default Modal;