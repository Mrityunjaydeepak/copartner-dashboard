import React from "react";
import { FaPen } from "react-icons/fa";
import Bin from "../../assets/TrashBinMinimalistic.png";

const WithAP = ({ activeButton }) => {
  return (
    <>
      <div className="channel-heading flex">
        <h3 className="text-xl font-semibold mr-auto">{activeButton}</h3>
        <button className=" border-2 border-black rounded-lg px-4 py-1 mr-4">
          + Add Relationship
        </button>
      </div>
      <div className="py-4 px-8">
      <table className="table-list">
          <thead>
            <tr>
              <th style={{ textAlign: "left", paddingLeft: "2rem" }}>Date</th>
              <th style={{ textAlign: "left" }}>A.P Name</th>
              <th>Relation Management</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ textAlign: "left", paddingLeft: "2rem" }}>
                01/04/2024
              </td>
              <td style={{ textAlign: "left" }}>Anuj Kumar</td>
              <td>Vinit</td>
              <td className="flex justify-center items-center gap-6">
                <FaPen className="text-blue-600 cursor-pointer" />
                <img
                  className="w-6 h-6 cursor-pointer"
                  src={Bin}
                  alt="Delete"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WithAP;