import React from 'react';

const Form = ({formTitle}) => {
    return ( 
        <div className="flex justify-center ml-6">
            <div className="form my-8 bg-rose-100 rounded-lg p-6">
                <h2 className="padder mb-5 text-xl font-bold">{formTitle}</h2>
                Email: <input type="text" placeholder="Your email" className="padder bg-white border-2 border-white rounded-lg p-2 mb-3" />
                <p className="mb-3">Message:</p><textarea name="" className="padder bg-white border-2 border-white rounded-lg p-2 mb-3" cols="50" rows="7" placeholder="Write your message here."></textarea>
                <div>
                <button style={{ width: '80px' }} className="padder bg-white text-gray-700 rounded-lg h-8">Send Email</button>
                </div>
            </div>
        </div>
     );
}
 
export default Form;
