// import React, { useEffect, useState } from 'react';

// const AvailableServices = () => {
//     const [availableServices, setAvailableServices] = useState([]);

//     useEffect(() => {
//         fetch("appointmentOptions.json")
//             .then((responce) => responce.json())
//             .then((data) => setAvailableServices(data))
//     }, [])
//     return (
//         <div>
//             {availableServices.map(x => { })}
//         </div>
//     );
// };

// export default AvailableServices;