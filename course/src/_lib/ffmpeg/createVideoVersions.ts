import ffmpeg from "fluent-ffmpeg";
import path from "path";

ffmpeg.setFfmpegPath("C:/ffmpeg/bin/ffmpeg.exe");
ffmpeg.setFfprobePath("C:/ffmpeg/bin/ffprobe.exe");
ffmpeg.setFlvtoolPath("C:/ffmpeg/bin/ffplay.exe");

export const createVideoVersions = (inputVideo: any) => {

    return new Promise((resolve, reject) => {
        const outputHighQuality = path.join(__dirname, "..", "..", "public", "videos", `${inputVideo.filename.split('.')[0]}-high.mp4`);
        const outputMediumQuality = path.join(__dirname, "..", "..", "public", "videos", `${inputVideo.filename.split('.')[0]}-medium.mp4`);
        const outputLowQuality = path.join(__dirname, "..", "..", "public", "videos", `${inputVideo.filename.split('.')[0]}-low.mp4`);

        let conversionsCompleted = 0;
        const totalConversions = 3;

        const onComplete = () => {
            if (++conversionsCompleted === totalConversions) {
                console.log('All video versions generated successfully');
                resolve('All video versions generated successfully');
            }
        };

        // Generate high-quality version (1280x720)
        ffmpeg(inputVideo.path)
            .videoCodec('libx264')
            .audioCodec('aac')
            .videoBitrate('1000k')
            .size('1280x720')
            .output(outputHighQuality)
            .on('end', onComplete)
            .on('error', reject)
            .run();

        // Generate medium-quality version (854x480)
        ffmpeg(inputVideo.path)
            .videoCodec('libx264')
            .audioCodec('aac')
            .videoBitrate('750k')
            .size('854x480')
            .output(outputMediumQuality)
            .on('end', onComplete)
            .on('error', reject)
            .run();

        // Generate low-quality version (640x360)
        ffmpeg(inputVideo.path)
            .videoCodec('libx264')
            .audioCodec('aac')
            .videoBitrate('500k')
            .size('640x360')
            .output(outputLowQuality)
            .on('end', onComplete)
            .on('error', reject)
            .run();
    });
};