import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
const rangeParser = require("range-parser");
import fs from "fs";

export const streamCourseVideoController = (dependencies: IDependencies) => {

    const { } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const segment = req.params?.segment;
            const filePath = `../../../public/videos/${segment}`;

            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    throw new Error('Segment not found');
                }

                const stat = fs.statSync(filePath);
                const size = stat.size;
                const range = req.headers.range;

                if (range) {
                    const { start, end } = rangeParser.parse(range, size);
                    res.status(206);
                    res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
                    res.setHeader('Content-Length', end - start + 1);
                    fs.createReadStream(filePath, { start, end }).pipe(res);
                } else {
                    res.setHeader('Content-Length', size);
                    fs.createReadStream(filePath).pipe(res);
                }
            });

        } catch (error) {
            next(error);
        }
    }
}