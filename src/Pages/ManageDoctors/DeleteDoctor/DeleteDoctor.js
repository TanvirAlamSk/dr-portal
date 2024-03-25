import React from 'react';

const DeleteDoctor = ({ deleteDocInfo, handelDeleteDoctor }) => {
    const { name, _id } = deleteDocInfo

    return (
        <div>
            <input type="checkbox" id="doctor_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure?</h3>
                    <p className="py-4">Delete Doctor <span className='font-bold text-red-400'>{name}</span></p>
                    <div className="modal-action">
                        <label htmlFor="doctor_modal" className="btn">Cancel</label>
                        <label htmlFor="doctor_modal" className="btn btn-error text-white" onClick={() => handelDeleteDoctor(_id)}>Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteDoctor;