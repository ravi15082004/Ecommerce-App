import { Request, Response } from "express";

export function listProducts(req:Request, res:Response) {
    res.send("A list of products");
}

export function getProductById(req:Request, res:Response) {
    res.send("getProductById");
}

export function createProduct(req:Request, res:Response) {
    console.log(req.body);
    res.send("createProduct");
}

export function updateProduct(req:Request, res:Response) {
    res.send("update Product");
}

export function deleteProduct(req:Request, res:Response) {
    res.send("delete Product");
}
