import React from 'react';

const AppointmentModal = ({ availableService }) => {
    const { name, slots, id } = availableService;
    return (

        // <dialog id={`my_modal_${id}`} className="modal">
        //     {/* modal */}
        //     <form className="modal-box" >
        //         <form method="dialog">
        //             <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 bg-neutral ">✕</button>
        //         </form>
        //         <h3 className="font-bold text-lg">{name}</h3>
        //         <select className='w-full text-black my-8 rounded-md py-2 bg-slate-200'>
        //             {
        //                 slots.map((slot, id) => <option
        //                     value={slot} key={id} className='px-2'>
        //                     {slot}
        //                 </option>)
        //             }
        //         </select>


        //         {/* <form onSubmit={handelmodal}> */}
        //         <form method="dialog" >
        //             <input name='name' placeholder='Full Name' className='w-full p-2 rounded-md bg-slate-200'></input>
        //             <br></br>
        //             <input name='email' placeholder='Email' className='w-full my-6 p-2 rounded-md bg-slate-200'></input>
        //             <br></br>
        //             <input name='number' placeholder='Phone Number' className='w-full p-2 mb-10 rounded-md bg-slate-200'></input>
        //             <input type='submit' value="SUBMIT" className="btn btn-neutral w-full font-thin"></input>
        //         </form>
        //         {/* </form> */}

        //     </form>
        // </dialog>

        <div>
            <input type="checkbox" id={`my_modal_${id}`} className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor={`my_modal_${id}`} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;