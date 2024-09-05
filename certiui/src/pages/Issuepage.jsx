import React from "react";
import Issue from "../Component/Issue";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BrowserProvider, Contract } from "ethers";
import {abi} from "../scdata/Cert.json"
import {CertModuleCert} from "../scdata/deployed_addresses.json"


const Issuepage = () => {
  const [course, setCourse] = useState("");
  const [cerid, setCerid] = useState("");
  const [cname, setCname] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");

  const provider = new BrowserProvider(window.ethereum);
  async function connentToMetamask() {
    const signer = await provider.getSigner();
    console.log("signer", signer.address);
     alert(`MetaMask is connected. Address: ${signer.address}`);
  }


  const navigate = useNavigate();

  const submitForm =async (e) => {
    e.preventDefault();
    const signer = await provider.getSigner();
    const newcerti = {
      course,
      cerid,
      cname,
      grade,
      date,
      };
      const instance = new Contract(CertModuleCert,abi,signer)

        const txl = await instance.issue(cerid,cname,course,grade,date);
        console.log("transaction details:",txl);
        console.log("form data",newcerti);
        alert("Data has been saved successfully!");

    // const res = addCertificate(newcerti);

    navigate("/");
  };

  // const addCertificate = async (newcerti) => {
  //   const res = await fetch("http://localhost:3004/submitform", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newcerti),
  //   });
  //   console.log("msgg", res);
  //   return res;
  // };

  
  return (
    <>
      <h1 className="font-extrabold text-3xl mt-8 ml-12 font-mono">
        Certificate Dapp
      </h1>
      <button
        type="submit"
        className="w-[10%] h-10 mt-4 ml-10 border-2 bg-blue-500  text-white rounded-lg hover:bg-violet-400"
        onClick={connentToMetamask}
      >
        connect to metamask
      </button>

      <div className="w-10/12   mx-auto bg-gray-300 mt-10 text-2xl">
        <br />
        <h1 className="text-center font-medium text-2xl mt-4 ">
          Issue New Certificate
        </h1>

        <form onSubmit={submitForm} className="ml-24 p-10">
          Certificate Id: <br />
          <input
            type="text"
            name="cerid"
            id="cerid"
            className="w-9/12 h-10 border-2 border-slate-400"
            value={cerid}
            onChange={(e) => setCerid(e.target.value)}
          />
          <br />
          <br />
          Candidate name <br />
          <input
            className="w-9/12 h-10 border-2 border-slate-400"
            type="text"
            name="cname"
            id="cname"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
          />
          <br />
          <br />
          Select Course <br />
          <select
            name="course"
            id="course"
            className="w-9/12 h-10 border-2 border-slate-400"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="Certified Blockchain Associate">
              Certified Blockchain Associate
            </option>
            <option value="Certified Ethereum Developer">
              Certified Ethereum Developer
            </option>
            <option value="Certified Hyperledger Fabric Developer">
              Certified Hyperledger Fabric Developer
            </option>
          </select>
          <br />
          <br />
          Select Grade <br />
          <select
            className="w-9/12 h-10 border-2 border-slate-400"
            name="grade"
            id="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="S">S</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>{" "}
          <br />
          <br />
          Issue Date
          <br />
          <input
            className="w-9/12 h-10 border-2 border-slate-400"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <br />
          {/* <a href="/certificate"> <input type="button" name="Home" id="" value="Issue Certificate" className="w-48 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 float-right mr-96" /></a> */}
          <button
            type="submit"
            className="w-48 h-10 bg-blue-500 text-sky-100 rounded-lg hover:bg-blue-400 float-right mr-96 "
          >
            Issue certificate
          </button>
        </form>
        <br />
      </div>
    </>
  );
};

export default Issuepage;
