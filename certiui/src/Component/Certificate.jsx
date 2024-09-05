import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

import { BrowserProvider, Contract } from "ethers";

import { abi } from "../scdata/Cert.json";
import { CertModuleCert } from "../scdata/deployed_addresses.json";
import Nav from './Nav';


const Certificate = () => {

  const [student,setStudent]=useState([]);
  const provider = new BrowserProvider(window.ethereum);

  const {id}=useParams();
   const navigate = useNavigate(); 

  useEffect(()=>{
        const fetchstudentdetails=async ()=>
        {
          try{
            const signer = await provider.getSigner();
            const instance = new Contract(CertModuleCert, abi, provider);
            const result = await instance.Certificates(id);
            setStudent(result);
            console.log(result);
            // const res=await fetch(`http://localhost:3004/api/form/${id}`);
            // const data=await res.json()
            // console.log(data);
            // setStudent(data);
             if (Object.values(result).every(value => value === '')){
               navigate("*");
             }
          }
          catch(error){
            console.log("error",error)
          }
          
        }
        fetchstudentdetails();
  
  
    },[])


  return (
    <>
    <Nav/>
      <br />
      <div className="border-2 border-double bg-slate-50 mt-20 mx-[10%] mb-10">
        <div className="text-center mt-10 ">
          <img
            src="../src/assets/images/im2.png"
            alt=""
            className="w-12 h-12 mx-auto"
          />
          <p className="text-4xl font-serif font-semibold h-14 text-red-800 mt-6">
            KERALA BLOCKCHAIN ACADEMY
          </p>
        </div>
        <div className="bg-slate-100 w-10/12 h-5/6 mx-auto mt-6 mb-32">
          <br />
          <img
            src="../src/assets/images/image.jpg"
            alt=""
            className="w-44 h-44 mx-auto "
          />
          <p className="text-center mt-12 text-3xl mb-40 p-2">
            {" "}
            This is to certify that{" "}
            <span id="name" className="text-3xl font-semibold mx-2">
              {student.name}
            </span>
            has successfully <br /> completed{" "}
            <span id="course" className="text-3xl font-semibold">
              {student.course}
            </span>
            <br />
            course on{" "}
            <span id="date" className="text-3xl font-semibold">
              {student.date}
            </span>{" "}
            with grade{" "}
            <span id="grade" className="text-3xl font-semibold ">
              {student.grade}
            </span>{" "} <br />
            from <b>KERALA BLOCKCHAIN ACADEMY</b>.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}

export default Certificate