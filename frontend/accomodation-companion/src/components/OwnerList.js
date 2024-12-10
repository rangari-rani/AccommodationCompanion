import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OwnerService from "../services/OwnerService";
import Owner from "./Owner";

const OwnerList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await OwnerService.getOwner();
        setOwner(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteOwner = (e, id) => {
    e.preventDefault();
    OwnerService.deleteOwner(id).then((res) => {
      if (owner) {
        setOwner((prevElement) => {
          return prevElement.filter((owner) => owner.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addOwner")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
          Add Property
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Category
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Price
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Address 
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Description 
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {owner.map((owner) => (
                <Owner
                  owner={owner}
                  deleteOwner={deleteOwner}
                  key={owner.id}></Owner>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default OwnerList;