import React from 'react';

const Comment = ({ eachComment }) => {
    const { comment, name, address, image } = eachComment
    return (
        <div className='shadow-lg rounded-lg p-5' >
            <p className='mt-5'>{comment}</p>
            <div className='flex items-center mt-5'>
                <img src={image} alt='' className='w-20 border-4 border-solid rounded-full border-secondary '></img>
                <div className='ml-6'>
                    <h4 className='font-medium text-neutral text-xl'>{name}</h4>
                    <p>{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;