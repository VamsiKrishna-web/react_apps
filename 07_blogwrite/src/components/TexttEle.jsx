import React from "react";

function InputEle({ onChangeContent = {}, changedcontent, changeEle, textHeading }) {


    return (

        <div className="flex flex-wrap  gap-3">
            {Boolean(changeEle) ? (
                <div>
                    <div className="mb-2"> <label htmlFor="story" className="text-lg">{textHeading}</label></div>
                    <div className="w-md ">
                        <textarea onChange={(e) => onChangeContent(e.target.value)} className=" w-full rounded-lg h-full border-2 border-sky-500 px-2 focus-visible:outline-2 outline-sky-400" id="story" name="story" rows="5" cols="33" value={changedcontent}>

                        </textarea>
                    </div>
                </div>

            ) : (

                <div>
                    <div className="mb-2"> <label htmlFor="story" className="text-lg">{textHeading}</label></div>
                    <div className="w-md ">
                        <textarea className=" w-full rounded-lg h-full border-2 border-white-500 px-2 focus-visible:outline-2 outline-sky-400" id="story" name="story" rows="5" cols="33" value={changedcontent} readOnly>

                        </textarea>
                    </div>
                </div>

            )


            }





        </div>
    )
}




export default InputEle