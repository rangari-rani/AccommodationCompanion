import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OwnerService from "../services/OwnerService";

const UpdateOwner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [owner, setOwner] = useState({
    id: id,
    name: "",
    category: "",
    price: "",
    address: "",
    description: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setOwner({ ...owner, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await OwnerService.getOwnerById(owner.id);
        setOwner(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateOwner = (e) => {
    e.preventDefault();
    console.log(owner);
    OwnerService.updateOwner(owner, id)
      .then((response) => {
        navigate("/ownerList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Property</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Name
          </label>
          <input
            type="text"
            name="name"
            value={owner.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
             Category
          </label>
          <input
            type="text"
            name="category"
            value={owner.category}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Price
          </label>
          <input
            type="number"
            name="price"
            value={owner.price}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={owner.address}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Description
          </label>
          <input
            type="text"
            name="description"
            value={owner.description}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateOwner}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/ownerList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOwner;
