import React from 'react';

const ContractCard = ({ item }) => {
    const { title, subtitle, id } = item
    return (
        <div className={`${id % 2 === 0 ? "bg-neutral" : "bg-secondary"} px-5 py-10 rounded-lg flex flex-col lg:flex-row gap-5 text-white text-center lg:text-left items-center`}>
            <div>
                <img src={item.icons} alt='' className='flex justify-center'></img>
            </div>
            <div>
                <h3 className='text-lg font-semibold '>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </div>
    );
};

export default ContractCard;