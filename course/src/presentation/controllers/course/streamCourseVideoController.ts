import { IDependencies } from "@/application/interfaces/IDependencies";
import { Request, Response, NextFunction } from "express";
const rangeParser = require("range-parser");
import path from "path";
import fs from "fs";

export const streamCourseVideoController = (dependencies: IDependencies) => {

    const {
        useCases: { getCourseByIdUseCase, getEnrollmentByUserIdUseCase }
    } = dependencies;

    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            const userId = req.query?.userId;
            const courseId = req.params?.courseId;
            const segment = req.params?.segment;
            const filePath = path.join(__dirname, "..", "..", "..", "public", "videos", segment);

            const course = await getCourseByIdUseCase(dependencies)
                .execute(courseId);

            if (!course) {
                throw new Error("Content doesn't exist");
            };

            if (course.pricing?.type === "paid" && course.trial?.video.toString() !== segment) {

                if(!userId){
                    throw new Error("UnAuthorized access!");
                }

                const userEnrolled = await getEnrollmentByUserIdUseCase(dependencies)
                    .execute(userId as string);

                if (!userEnrolled) {
                    throw new Error("You are not allowed to access this content!");
                }

                const exist = userEnrolled.find((item) => item.courseId.toString() === courseId.toString());
                
                if(!exist){
                    throw new Error("Please enroll to the course, for access the content!");
                }

            }

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