import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from "../../assets/images/people1.png"
import people2 from "../../assets/images/people2.png"
import people3 from "../../assets/images/people3.png"
import Comment from './Comment/Comment';

const Comments = () => {
    const allComments = [
        {
            id: 1,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            image: people1

        },
        {
            id: 2,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            image: people2

        },
        {
            id: 3,
            comment: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            name: "Winson Herry",
            address: "California",
            image: people3

        },
    ]
    return (
        <div className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h5 className='text-secondary font-semibold'>Testimonial</h5>
                    <h2 className='text-3xl '>What Our Patients Says</h2>
                </div>
                <div>
                    <img src={quote} alt='' className='w-40'></img>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {allComments.map((eachComment) => <Comment eachComment={eachComment} key={eachComment.id}></Comment>)}
            </div>
        </div>
    );
};

export default Comments;