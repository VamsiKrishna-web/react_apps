import React from 'react'

function Card(props) {
    // console.log(props)
    return (
        <>
            <div className="flex flex-col border-2 border-red-400 mb-3  gap-2 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 ...">
                <img className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0" src={props.im_url} alt="" />
                <div className="space-y-2 text-center sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg font-semibold text-white">{props.username}</p>
                        <p className="font-medium text-white">{props.role}</p>
                    </div>
                    <button className="border-purple-200 text-green-500 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700 ...">
                        {props.btnText || "visit me"}
                    </button>
                </div>
            </div>

        </>
    )

}

export default Card