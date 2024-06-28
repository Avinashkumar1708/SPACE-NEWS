import axios from "axios"


export const baseUrl="https://api.spaceflightnewsapi.net/v4"

export const axiosInstance=axios.create({
    baseURL: baseUrl,
    
  })

