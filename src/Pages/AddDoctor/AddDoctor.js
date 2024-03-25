import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit } = useForm()
    const imageBBKey = process.env.REACT_APP_imagebb;
    console.log(imageBBKey)
    const { data: specialtyes = [] } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => await fetch("http://localhost:5000/appointment-specialty")
            .then((response) => response.json())
    })

    //normal
    // const handelAddDoctor = (event) => {
    //     event.preventDefault()
    //     const name = event.target.name.value
    //     const email = event.target.email.value
    //     const specialty = event.target.doctorSpecialty.value
    //     const img = event.target.img.files[0]
    //     console.log(img)
    // }


    // for react hook form
    const handelAddDoctor = (data) => {
        const name = data.name
        const email = data.email
        const specialty = data.doctorSpecialty
        const img = data.img[0]
        const formData = new FormData()
        formData.append("image", img)
        fetch(`https://api.imgbb.com/1/upload?key=${imageBBKey}`)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return (
        <div className='flex flex-col  md:w-80 p-5 shadow-2xl mx-auto rounded-xl my-4'>
            <h3 className='text-black text-center text-xl font-semibold mt-6'>Add A New Doctor</h3>

            {/*  with out react hook form */}
            {/* <div className="hero mt-4 bg-base-200 ps-0">
                <div className="hero-content flex-col ">
                    <div className="card shrink-0  shadow-2xl bg-base-100">
                        <form className="card-body w-80" onSubmit={handelAddDoctor}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Specialty</span>
                                </label>
                                <select name='doctorSpecialty' className='select select-bordered w-full  py-3'>
                                    {specialtyes.map((specialty) => <option
                                        key={specialty._id}
                                        value={specialty.name}
                                    >{specialty.name}</option>)}
                                </select>
                            </div>
                            <div className="form-control mt-5">
                                <input type="file" name='img' className="file-input file-input-bordered w-full max-w-xs" accept="image/*" />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-neutral">ADD</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> */}


            {/*  with react hook form */}
            <form onSubmit={handleSubmit(handelAddDoctor)} className='mt-10 '>
                <div className="form-control">
                    <label className="label-text font-medium">Name</label>
                    <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full " />
                </div>
                <div className="form-control my-6">
                    <label className="label-text font-medium">Email</label>
                    <input type='email' {...register("email")} className="input input-bordered w-full " />
                </div>
                <div className="form-control">
                    <label className="label-text font-medium">Specialty</label>
                    <select {...register("doctorSpecialty")} className="select select-bordered w-full max-w-xs">
                        {specialtyes.map((specialty) => <option
                            key={specialty._id}
                            value={specialty.name}
                        >{specialty.name}</option>)}
                    </select>
                </div>
                <div className="form-control  my-6">
                    <input {...register("img")} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                </div>


                <button type='submit' className="btn btn-neutral w-full">ADD</button>
            </form>


        </div>
    );
};

export default AddDoctor;