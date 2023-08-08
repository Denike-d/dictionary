import React from "react";
import pana from "./pana.png";

import AudioPlayer from "./AudioPlayer";
const Data = ({ data }) => {
  console.log(data, "from data");

  return (
    <div>
      {data.length > 0 ? (
        <div className="mt-12">
          {data.map((item) => (
            <div>
              <div>
                <p className="font-bold text-2xl">{item.word}</p>
                <div>
                  {/* {item.phonetics.length > 0 ? (
                    <AudioPlayer src={item.phonetics[3].audio} />
                  ) : null} */}
                </div>
              </div>

              <div className="">
                {item.meanings.map((meaning) => (
                  <div className="leading-8 mt-4">
                    <p className="font-bold text-base text-[#5E81FF]">
                      {meaning.partOfSpeech} <hr className="w-60 mt-2" />
                    </p>
                    <ul>
                      <p className="italic">meaning</p>
                      {meaning.definitions.map((definition) => (
                        <li className="list-disc list-[#5E81FF]">
                          {definition.definition}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <img src={pana} className="mt-20" width={350} />
      )}
    </div>
  );
};

export default Data;
