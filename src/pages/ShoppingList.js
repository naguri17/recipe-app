import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addIngredient,
  clearIngredient,
} from "../redux/slices/ingredientSlice";
import IngredientList from "../components/shoppingList/IngredientList";

const ShoppingList = () => {
  const data = useSelector((state) => state.ingredient.listItems);

  const [values, setValues] = useState({ name: null, amount: null });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addIngredient(values));
    e.target.reset();
  };

  const onClear = () => {
    dispatch(clearIngredient());
  };

  return (
    <form className="m-5" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-row space-x-5">
        <div className="name-input">
          <h3 className="font-semibold text-base">Name</h3>
          <input
            ref={useRef(null)}
            type="text"
            className="border rounded-lg px-2 py-1"
            name="name"
            onChange={handleInputChange}
          />
        </div>
        <div className="amount-input">
          <h3 className="font-semibold text-base">Amount</h3>
          <input
            ref={useRef(null)}
            type="text"
            className="border rounded-lg px-2 py-1"
            name="amount"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="button-form flex flex-row mt-5 space-x-3 w-1/2 border-b-2 pb-10 ">
        <button
          type="submit"
          className="bg-green-400 px-2 py-1 rounded-lg text-white hover:bg-green-500"
        >
          Add
        </button>
        <button
          onClick={() => onClear()}
          className="bg-blue-400 px-2 py-1 rounded-lg text-white hover:bg-blue-500"
        >
          Clear
        </button>
      </div>
      <IngredientList key={data?.id} product={data} />
    </form>
  );
};

export default ShoppingList;
