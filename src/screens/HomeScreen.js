import React, { useState } from "react";

const BitlyClient = require("bitly").BitlyClient;

const HomeScreen = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [isShorten, setIsShorten] = useState(false);
  const [shortenLink, setShortenLink] = useState("");

  const ACCESS_TOKEN = "11a42a7f28811b271962efc6c31bdc4726538643";
  const bit_ly = new BitlyClient(ACCESS_TOKEN);

  const shortLink = (url) => {
    bit_ly
      .shorten(url)
      .then((res) => {
        setIsShorten(true);
        setShortenLink(res.link);
        console.log(`Res: ${res.link}`);
      })
      .catch((err) => console.error(err));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    shortLink(originalUrl);
  };

  const resetHandler = () => {
    setOriginalUrl("");
    setShortenLink("");
    setIsShorten(false);
  };

  return (
    <div className="container mx-auto px-3 md:px-12 pt-7 md:pt-10">
    
        <div className="text-center pt-14 md:pt-32 md:pl-7">
           
          <p className="text-5xl md:text-6xl text-purple-800 font-bold">
            URL Shortner
          </p>
          <p className="mt-6 text-xl text-gray-500">
            <span className="text-purple-800">URL Shortner</span> This takes some long, unwieldy link and turns it into a shorter, easy-to-share one.
          </p>
          <form className="flex flex-col mt-5" onSubmit={submitHandler}>
            <label htmlFor="url" className="text-lg text-purple-700 mb-2">
              Enter valid URL
            </label>
            <input
              type="url"
              placeholder="Enter valid URl..."
              id="url"
              required
              className="px-5 py-3 rounded ring-2 ring-gray-200 transition duration-200 focus:outline-none focus:ring-purple-700 text-xl"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
            />
            <div className="flex flex-row">
              <button
                type="submit"
                className="px-6 py-4 bg-purple-700 text-white text-xl font-semibold transition duration-200 hover:bg-purple-800 focus:outline-none rounded-md mt-5 max-w-max"
              >
                {"Create Shorten"}
              </button>
              {isShorten && (
                <button
                  onClick={resetHandler}
                  className="px-6 py-4 ml-4 bg-red-600 text-white text-xl font-semibold transition duration-200 hover:bg-red-800 focus:outline-none rounded-md mt-5 max-w-max"
                >
                  Reset
                </button>
              )}
            </div>
          </form>
          {isShorten && (
            <div className="px-7 py-5 bg-gray-100 mt-6 rounded  flex flex-col">
              <a
                href={shortenLink}
                className="font-semibold text-lg text-purple-800"
              >
                {shortenLink}
              </a>               
            </div>
          )}
      </div>
      <div className="flex flex-col text-center w-full my-4 md:my-6">
        <a
          href="https://github.com/himanshusoni021"
          className="text-2xl md:text-3xl mb-3 text-gray-700 hover:text-black"
        >
          <i className="fab fa-github" />
        </a>
        <p className="text-gray-600">
          Developed by Himanshu Soni
        </p>
      </div>
    </div>
  );
};

export default HomeScreen;
