import { ErrorRequestHandler } from "express";
import { HTTPSTATUS } from "../config/http.config";

export const errorHandler: ErrorRequestHandler = (err, req, res, next): any => {
    res.status(HTTPSTATUS.INTERNAL_SERVER_ERROR).json({ success: false, message: "Internal server error", error: err?.message || "Something went wrong" });
};