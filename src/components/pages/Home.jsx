import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import {
  getArticles,
  getBlogs,
} from "../../services/apiOperation/blogOperation";
import { Link } from "react-router-dom";
import moment from "moment";
import Foot from "../layouts/Foot";
import image from "../../../images/Image.png"

const Home = () => {
  const [article, setArticle] = useState([]);
  
  const [blog, setBlog] = useState([]);
  
  const limit=10
  
  const[offset,setOffset]=useState(10)
  

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(20);
  // const lastIndex = currentPage * postsPerPage;
  // const skipIndex = lastIndex - postsPerPage;

  const prevPageHandler=()=>{
    if(offset>10){
      setOffset(offset-10)
    }
   
  }
  const nextPageHandler=()=>{
    
    setOffset(offset+10)
    
    
  }


  const func = async () => {
    const data = await getArticles(limit,offset);
    const res = await getBlogs(limit,offset);
    setArticle(data?.results);
    console.log(data);
    setBlog(res.results);
    console.log(res);
  };

  const func2 = async () => {
    const data = await getArticles();
    const res = await getBlogs();
    setArticle(data);
    setBlog(res);
  };


  useEffect(() => {
    

    func();

    // console.log(data);
  }, [offset]);

  

  console.log(article);
  return (
    <>
      <div className="flex flex-col m-10  justify-evenly items-center ">
        <div className="static mb-10 object-center">
        
          <img className="h-[600px] w-[1216px] max-md:h-[375px] max-md:w-[750px] max-sm:h-[187px] max-sm:w-[375px]  " src={image} alt="..." />
          
          <div className="flex flex-col justify-center gap-2   w-[350px] h-[175px] rounded-2xl absolute -bottom-10 bg-gray-100 ml-10 shadow-lg max-lg:hidden max-md:hidden  max-md:h-[88px] max-md:w-[175px] max-sm:bottom-96 max-sm:h-[55px] max-sm:w-[100px]">
            
            <p className="text-4xl  ml-5 font-bold text-gray-900 dark:text-white max-md:text-lg max-md:ml-2 max-sm:text-xs max-sm:ml-2">Spaceflight </p>
            <p className="text-2xl  ml-5 font-bold text-gray-900 dark:text-white max-md:text-lg max-md:ml-2 max-sm:text-xs max-sm:ml-2">
            News : Blogs | Articles
            </p>
          </div>
        </div>
        <p className="text-3xl font-black text-gray-900 dark:text-whit>Articles max-md:text-2xl max-sm:text-1xl">
          Latest Blogs
        </p>
        <div className="flex flex-wrap justify-evenly items-center  gap-10 pt-10 bg-gray-50 rounded-xl mt-5 pb-5">
          {blog.map((item) => {
            return (
              <Link
                key={item.id}
                className="flex flex-wrap rounded-xl gap-2 justify-center  hover:border w-[300px] h-[450px] justify-evenly+ items-center bg-white  hover:shadow-xl  hover:bg-gray-100 hover:scale-105 active:bg-slate-100"
                to={item.url}
              >
                <img
                  className="h-[200px] w-[200px] "
                  src={item.image_url}
                  alt=""
                />
                <div className="flex flex-col w-[250px]">
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </p>
                  <p className="text-sm">{item.summary.slice(0,100)}...</p>
                </div>
                <div>
                  <p
                    className="text-sm font-bold text-gray-400
                         dark:text-white"
                  >
                    {moment(item.published_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
        
      </div>
      <div className="ml-16 flex flex-col ">
      <p className="text-3xl font-black text-gray-900 dark:text-whit>Articles mt-10 drop-shadow-2xl">
          {" "}
          Latest Articles
        </p>
        <div className="flex flex-wrap items-center  flex-col mt-5 w-2/3 mb-32 bg-gray-50 rounded-xl pb-5 max-sm:w-5/6 ">
          {article.map((item) => {
            return (
              <Link
                key={item.id}
                className=" flex gap-5 items-center mt-5  h-36 w-10/12 rounded-lg bg-white hover:bg-slate-100 hover:scale-105 hover:shadow-2xl max-sm:flex-col max-sm:p-2 max-sm:h-52 max-sm:w-5/6 "
                to={item.url}
              >
                <img
                  className="h-32 w-32 rounded-xl ml-5 shadow-2xl max-sm:h-14 max-sm:w-14 max-lg:h-16 max-lg:w-16 "
                  src={item.image_url}
                  alt="..."
                />
                <div className=" flex flex-col gap-2 items-center justify-center w-auto " >
                  <p className="text-lg font-bold text-gray-900 dark:text-white max-sm:text-xs max-md:text-sm max-lg:text-base">
                    {item.title.slice(0,100)}...
                  </p>
                  <p className="text-sm max-md:text-[10px] max-lg:text-xs">{item.summary.slice(0,90)}...</p>
                </div>
                <div className="flex flex-wrap flex-col gap-2 items-center justify-center ">
                  <p
                    className="text-sm font-bold text-gray-400
                         dark:text-white w-auto max-lg:text-xs max-md:text-[8px] max-sm:text-[6px]" 
                  >
                    {moment(item.published_at).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </p>
                </div>

                {/* <p>{item.summary}</p> */}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex  justify-center mb-3">
          <button className="bg-[#4b5563] text-white box-border h-10 w-32 border-2 rounded-s-xl" onClick={prevPageHandler}>Previous Page</button>
          <button className="bg-[#4b5563] text-white box-border h-10 w-32 border-2 rounded-e-xl " onClick={nextPageHandler}>Next Page </button>
          
        </div>
        
      <Foot/>
    </>
  );
};

export default Home;
