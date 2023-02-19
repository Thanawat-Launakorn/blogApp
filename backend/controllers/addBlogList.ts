import { RequestHandler } from "express";
import { addBlog } from "../models/blog";
import { CommomResponseBody } from "../src/main";
interface RequestBody {
    title: string,
    body: string,
    author: string,
    image?: string,
    date: any | Date
}
export default <RequestHandler<unknown, CommomResponseBody, RequestBody>>((req, res) => {
    const id = addBlog(req.body) 
    res.status(201).send({ data: id })
})