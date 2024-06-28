// blog endpoint.

import { baseUrl } from "./helper";

export const GET_ALL_BLOGS='/blogs/';
export const GET_SINGLE_BLOG=baseUrl+'/'


export const endPoints={
    blog:"/blogs/",
    offset:"/blogs/?offset=",
    article:"/articles/"
}