import React from 'react';

const AppointmentType = ({ availableService }) => {
    const { name, slots, id } = availableService;
    const handelmodal = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        console.log(name)
    }
    return (
        <div className='shadow-lg p-10 rounded-lg'>
            <h5 className='text-secondary text-lg font-medium'>{name}</h5>
            <input className='my-5 text-center' placeholder={`${slots[0]}`}></input>
            <br></br>
            <button className='btn btn-secondary text-white' onClick={() => document.getElementById(`my_modal_${id}`).showModal()}>Book Appointment</button>

            {/*  */}
            <dialog id={`my_modal_${id}`} className="modal">
                <form className="modal-box" >
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost text-white absolute right-2 top-2 bg-neutral ">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <select className='w-full text-black my-8 rounded-md py-2 bg-slate-200'>
                        {
                            slots.map((slot, id) => <option
                                value={slot} key={id} className='px-2'>
                                {slot}
                            </option>)
                        }
                    </select>

                    {/* modal */}
                    {/* <form onSubmit={handelmodal}> */}
                    <form method="dialog" >
                        <input name='name' placeholder='Full Name' className='w-full p-2 rounded-md bg-slate-200'></input>
                        <br></br>
                        <input name='email' placeholder='Email' className='w-full my-6 p-2 rounded-md bg-slate-200'></input>
                        <br></br>
                        <input name='number' placeholder='Phone Number' className='w-full p-2 mb-10 rounded-md bg-slate-200'></input>
                        <input type='submit' value="SUBMIT" className="btn btn-neutral w-full font-thin"></input>
                    </form>
                    {/* </form> */}

                </form>
            </dialog>
            {/*  */}
        </div>
    );
};

export default AppointmentType;