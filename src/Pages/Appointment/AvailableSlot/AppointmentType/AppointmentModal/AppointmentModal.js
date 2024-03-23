import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Context/AuthProvider';
import toast from 'react-hot-toast';

const AppointmentModal = ({ treatment, setTreatment, selected }) => {
    const { name, slots } = treatment;
    const { loginUser } = useContext(AuthContext)
    const handelTreatment = (event) => {
        event.preventDefault();
        const appointmentDate = event.target.appointmentDate.value
        const timeSlot = event.target.timeSlot.value
        const patientName = event.target.name.value
        const email = event.target.email.value
        const phoneNo = event.target.number.value

        const bookingInfo = {
            patientName, email, name, appointmentDate, timeSlot, phoneNo
        }

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then((response) => response.json())
            .then((data) => {
                if (data?.acknowledged) {
                    toast.success("Booking Conformed")
                }
            })
        setTreatment(null)


    }
    return (
        <div>
            <input type="checkbox" id="appointment_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handelTreatment} >
                        <select name='timeSlot' className='w-full text-black my-8 rounded-md py-2 bg-slate-200'>
                            {
                                slots.map((slot, id) => <option
                                    value={slot} key={id} className='px-2'>
                                    {slot}
                                </option>)
                            }
                        </select>

                        <input name='appointmentDate' value={`${selected}`} className='w-full p-2 rounded-md bg-slate-200' readOnly></input>

                        <input name='name' type='text' value={`${loginUser?.displayName}`} className='w-full p-2 rounded-md bg-slate-200 mt-6' disabled></input>
                        <br></br>
                        <input name='email' type='email' value={`${loginUser?.email}`} className='w-full my-6 p-2 rounded-md bg-slate-200' readOnly disabled></input>
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