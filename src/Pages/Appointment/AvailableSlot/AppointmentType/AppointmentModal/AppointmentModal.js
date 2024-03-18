import React from 'react';

const AppointmentModal = ({ treatment, setTreatment, selected }) => {
    const { name, slots } = treatment;
    const handelTreatment = (event) => {
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const phoneNo = event.target.number.value
        // console.log(name, email, phoneNo)
        const getAppointment = {
            name, email, phoneNo
        }
        setTreatment(null)


    }
    return (
        <div>
            <input type="checkbox" id="appointment_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelTreatment} >
                        <select name='time-slot' className='w-full text-black my-8 rounded-md py-2 bg-slate-200'>
                            {
                                slots.map((slot, id) => <option
                                    value={slot} key={id} className='px-2'>
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input name='treatment-name' value={`${selected}`} className='w-full p-2 rounded-md bg-slate-200' readOnly></input>
                        <input name='name' type='text' placeholder='Full Name' className='w-full p-2 rounded-md bg-slate-200 mt-6'></input>
                        <br></br>
                        <input name='email' type='email' placeholder='Email' className='w-full my-6 p-2 rounded-md bg-slate-200'></input>
                        <br></br>
                        <input name='number' type='number' placeholder='Phone Number' className='w-full p-2 mb-5 rounded-md bg-slate-200'></input>
                        <div className="modal-action">

                            <input type="submit" className="btn btn-neutral w-full font-thin" value="SUBMIT"></input>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;