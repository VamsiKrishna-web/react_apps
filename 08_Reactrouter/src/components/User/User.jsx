import React from "react";
import { useParams } from "react-router-dom"
function User() {
    const { userid } = useParams();
    return (

        <div className="w-lg bg-gray-600 text-center text-white flex justify-center mx-auto py-2">
            <h1 className="w-full text-2xl "> User:{userid}</h1>
        </div>
    )

}

export default User