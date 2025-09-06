import React, { useEffect } from "react";
import LatestBlog from "../components/LatestBlog";

const HomePage = () => {
  const [searchType, setSearchType] = React.useState("characters");
  const [latestBlogData, setLatestBlogData] = React.useState<any>({});
  const [limit, setLimit] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    handleSearch({ type: searchType });
  }, [searchType]);

  const handleSearch = async ({ type }: { type: string }) => {
    setIsLoading(true);
    await fetch(`${import.meta.env.VITE_API_BASE_URL}/${type}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLatestBlogData(() => data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <div className="h-[58vh] w-full flex items-center justify-center flex-col relative mb-4">
        <h1 className="text-4xl font-bold text-white relative z-10">
          Welcome to SinobiArchive
        </h1>
        <p className="mt-4 text-lg text-white relative z-10">
          Your gateway to the world of Shinobi
        </p>
        <div className="relative z-10 mt-6 d-flex gap-2 items-center">
          <select
            name="select-type"
            id=""
            className="bg-white opacity-75 px-4 py-2 w-92 rounded outline-none focus:opacity-100 transition-opacity duration-300"
            value={searchType}
            onChange={(e) => {
              setSearchType(e.target.value);
              console.log(e.target.value);
              handleSearch({ type: e.target.value });
            }}
          >
            <option value="characters">Characters</option>
            <option value="clans">Clans</option>
            <option value="villages">Villages</option>
            <option value="kekkei-genkai">Kekkei Genkai</option>
            <option value="tailed-beasts">Tailed Beasts</option>
            <option value="teams">Teams</option>
            <option value="akatsuki">Akatsuki</option>
            <option value="kara">Kara</option>
          </select>
          {/* <input
            type="text"
            className="bg-white opacity-75 px-4 py-2 rounded outline-none focus:opacity-100 transition-opacity duration-300 w-92"
            name="search"
            id="search"
            placeholder="What are you looking for?"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
          /> */}
        </div>
      </div>
      <div className="bg-white p-4 rounded-t-lg mx-20">
        <LatestBlog type={searchType} data={latestBlogData} />
        <div className="flex justify-center">
          <button
            onClick={() => {
              handleSearch({ type: searchType });
              setLimit((prev) => prev + 10);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-8"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
