import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import  OwnerService from "../services/OwnerService";

const AddOwner = () => {
  const [owner, setOwner] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
    address: "",
    description: "",
  });

  const navigaye = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setOwner({ ...owner, [e.target.name]: value });
  };


  const saveOwner = (e) => {
    e.preventDefault();
    OwnerService.saveOwner(owner)
      .then((response) => {
        console.log(response);
        navigaye("/");
        alert("Property  added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setOwner({
      id: "",
      name: "",
      category: "",
      price: "",
      address: "",
      description: "",
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Property</h1>
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
            onClick={saveOwner}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Save
          </button>
          <button
            onClick={reset}

            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOwner;
