// import React from 'react'

// const Notfoundpage = () => {
//   return (
//     <div className='text-center mt-[10%]'>No Certificate with this datas are found....</div>
//   )
// }

// export default Notfoundpage
import React from "react";
import { useNavigate } from "react-router-dom";
// import { ExclamationCircleIcon } from "@heroicons/react/outline";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      {/* <ExclamationCircleIcon className="h-24 w-24 text-red-500 mb-4" /> */}
      <h1 className="text-2xl font-bold mb-2">Certificate Not Found</h1>
      <p className="text-gray-600 mb-6">
        We couldn't find any certificate with the provided details. Please check
        the information and try again.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Go Back to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
