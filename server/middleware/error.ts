import ErrorHandler from "../utils/ErrorHandler"
import { NextFunction, Request, Response } from "express";

export const ErrorMidleware= (err:any, req:Request, res:Response, next: NextFunction) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || 'Internal Server Error';

    //Wrong moongose db error message
    if(err.name === 'CastError'){
        const message = `Resource not found. Invalid: ${err.path}`
        err = new ErrorHandler(message, 400)
    }

    // Duplicate key error message
    if(err.code === 11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message,400)
    }

    // Wrong jwt error
    if (err.name === 'JsonWebTokenError'){
        const message = `Json Web Token is invalid, try again`
        err = new ErrorHandler(message, 400)
    }  

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    })

}