import React, { useState, useEffect } from "react";
import Data from "./Data";
import { storeData } from "../firebase";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const Dictionary = () => {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`
    );
    const jsonData = await response.json();
    console.log(jsonData);
    setData(jsonData);
    localStorage.setItem("dataKey", JSON.stringify(jsonData));
  }

  function handleUserInput(e) {
    e.preventDefault();
    getData();
  }

  return (
    <div className="md:flex lg:px-96 px-4 justify-center my-4">
      <div>
        <div>
          <BookOpenIcon width={40} className="text-[#5E81FF]" />
          <div></div>
        </div>
        <form>
          <div className="lg:w-96 bg-gray-100 mt-4 rounded-sm py-2 px-4 flex items-center">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="type a word"
              className="w-full bg-gray-100 rounded-lg outline-none"
            />
            <button onClick={handleUserInput}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#5E81FF"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </form>
        <Data data={data} />
      </div>
    </div>
  );
};

export default Dictionary;
