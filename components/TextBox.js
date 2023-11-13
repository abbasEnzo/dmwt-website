import React from "react";


const TextBox = ({idBoxShadow, idTextBox, headline, text}) => {
    return (
        <div className={'text-box hidden'} id={idBoxShadow}>
            <div className={"text-box hidden"} id={idTextBox}>
                <h3 className='hidden'>{headline}</h3>
                <p className='hidden'>
                    {text}
                </p>
            </div>
        </div>
    )
}
export default TextBox;
