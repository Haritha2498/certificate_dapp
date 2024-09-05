import React, { useState } from 'react';


import { BrowserProvider, Contract } from "ethers";
import {abi} from "../scdata/Cert.json"
import {CertModuleCert} from "../scdata/deployed_addresses.json"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [idno, setIdno] = useState('');

  const [res, setres] = useState("");
  

  const navigate = useNavigate();
  const provider = new BrowserProvider(window.ethereum);

  const formSubmit =async (event) => {
    event.preventDefault(); 
     console.log("requested id:",idno);
        const signer=await provider.getSigner();
        const instance = new Contract(CertModuleCert,abi,provider)
        const result = await instance.Certificates(idno);
        setres(result);

        console.log(result);


        if (Object.values(result).every((value) => value === "")) {
          navigate("*");
        }
        else{
          const link = `/certificate/${idno}`;
          console.log(idno);
          window.location.href = link;
        }
  };
  

  return (
    <>
      <div className="text-center mt-20 w-8/12 h-4/6 mr-20 ml-56">
        <h1 className="mt-100 text-4xl font-semibold">CERTIFICATE DAPP</h1>
        <img
          src="./src/assets/images/image.jpg"
          alt=""
          className="w-72 h-72 mx-auto mt-10"
        />
        <div className="mx-auto mt-10 gap-10">
          <form onSubmit={formSubmit}>
            <input
              type="text"
              name="idno"
              id="idno"
              placeholder="Enter certificate id:"
              className="w-4/12 h-12 border-gray-400 border-2 rounded-3xl text-xl p-4 shadow-xl"
              value={idno}
              onChange={(e) => setIdno(e.target.value)}
            />
            <button
              type="submit"
              className="w-36 h-10 ml-[5%] bg-blue-500 text-white rounded-lg hover:bg-violet-400"
            >
              Get Certificate
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
