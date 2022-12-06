"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IconBase } from "react-icons";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";
import { useSelector, useDispatch, Provider } from "react-redux";
import { decrement, increment } from "../../../slices/likeCounterSlice";
import { RootState, store } from "../../../store";
import Comments from "../../Comments";



function Popular(){ 
  const [isClicked, setIsClicked] = useState(false);
  const [container, setContainer] = useState<string[]>([]);
  

 
  const url = "https://www.reddit.com/r/popular/top.json";
  //async function to fetch data
  const getSomeData = async () => {
    const response = await fetch("https://www.reddit.com/r/popular/top.json");
    const data = await response.json();
    setContainer(data.data);
    console.log(data.data);
  };

  useEffect(() => {
    getSomeData();
  }, []);
  const like = useSelector((state: RootState) => state.like.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-wrap  justify-center">
      {container.children?.map((container: any) => (
        //
        <div
          key={container.data.id}
          className="shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] hover:shadow-lg
          w-500 h-400 p-20 border   transition transition-duration: 150ms
          "
        >
          <img
            key={container.data.picture}
            height={300}
            width={500}
            className="object-contain"
            src={
              container.data.post_hint === "image"
                ? container.data.url
                : container.data.thumbnail
            }
          />
          <h2
            key={container.data.text}
            className="text-2xl overflow-hidden  text-center p-t-10"
          >
            {container.data.title}
          </h2>
          <p key={container.data.text2} className="text-center">
            {container.data.context}
          </p>
          <motion.div
            className=""
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 0,
              repeatDelay: 1,
            }}
          >
            <p className="">Likes: {like}</p>
            <HandThumbUpIcon
              className="text-green-600 h-10 w-10"
              onClick={() => dispatch(increment())}
            />

            <HandThumbDownIcon
              className="h-10 w-10 text-red-600 cursor-pointer"
              onClick={() => dispatch(decrement())}
            />

            <button
              className="bg-red-400 text-white hover:bg-red-300 font-cold py-2 px-4 rounded disabled:opacity-50
          disabled:cursor-not-allowed "
              onClick={() => setIsClicked(!isClicked)}
            >
              Comments
            </button>

            {isClicked ? (
              <div className="bg-white w-500 max-h-screen p-20 border overflow-y-scroll   ">
                <Comments />
              </div>
            ) : null}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Popular;
