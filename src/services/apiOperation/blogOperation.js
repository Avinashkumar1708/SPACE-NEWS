import { endPoints } from "../apiEndpoints"
import { axiosInstance } from "../helper"

export const getBlogs=async()=>{
    try {
        const res=await axiosInstance.get(endPoints.blog)
        // console.log(res.data.results);
        return res.data
    } catch (error) {
        console.log(error);
    }
}

export const getArticles=async(limit,offset)=>{
    try {
        const res= await axiosInstance.get(`${endPoints.article}?limit=${limit}&offset=${offset}`);
        return res?.data
        
        console.log(res.data.results);
    } catch (error) {
        console.log(error);
        
    }
}
export const getBlog=async(limit,offset)=>{
    try {
        const res= await axiosInstance.get(`/blogs/?limit=${limit}&offset=${offset}`)
      
        console.log(res.data.results);
        return res?.data
    } catch (error) {
        console.log(error);
    }
}