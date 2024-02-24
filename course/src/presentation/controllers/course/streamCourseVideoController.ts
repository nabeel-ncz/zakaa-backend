import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";

export const streamCourseVideoController = (dependencies: IDependencies) => {

    const { } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {

            const range = req.headers.range;
            const vid = req.params.vid;
            if (!range) {
                res.status(400).send("Requires Range header");
            }

            const videoPath = path.join(__dirname, "..", "..", "public", "videos", vid);
            const videoSize = fs.statSync(`${videoPath}`).size;

            const CHUNK_SIZE = 10 ** 6; // 1MB
            const start = Number(range!.replace(/\D/g, ""));
            const end = Math.min(start + CHUNK_SIZE, videoSize - 1);

            // Create headers
            const contentLength = end - start + 1;
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${videoSize}`,
                "Accept-Ranges": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4",
            };

            res.writeHead(206, headers);

            const videoStream = fs.createReadStream(videoPath, { start, end });

            videoStream.pipe(res);

        } catch (error) {
            next(error);
        }
    }
}