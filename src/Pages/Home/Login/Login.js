import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useFirebase from "../../../Hooks/useFirebase";


const Login = () => {
  const {
    error,
  
    signInUsingGoogle,
    processLogin
} = useAuth()

    return (
        <div className=" bg-dark p-5 text-white">
            <div className="row ">
             <h2 className="mb-4">Google Login</h2>
                <div className="col-md-12"> 
              
                  <span className="text-light"></span> 
                  <button className="background" onClick={signInUsingGoogle}>
                    <img className="w-100 h-25" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bti05tOH5sCciBwlva4Ye412KGVitFA0rXdQFkOYvyHi8psL59foqEnLm7FJ-yJ1osw&usqp=CAU" alt="">
                    </img>
                  </button>
                

                </div>
            </div>
        </div>
    );
};

export default Login;
