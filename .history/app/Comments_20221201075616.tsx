import React, { useEffect, useState } from "react";

function Comments() {
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

  return (
    <div>
      {container.children?.map((container: any) => (
        

        //TODO: only display the first 10 comments
        <div
          className="flex overflow-y-scroll  flex-col   bg-gray-100 rounded-lg shadow-lg"
          key={container}
        >
          <h1 className="p-10 text-2xl text-red-500  ">
            {container.data.author}:
          </h1>
          <p className="items-center font-semibold ">{container.data.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;
