import ffmpeg from "fluent-ffmpeg";
import path from "path";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

export const createVideoVersions = (inputVideo: any) => {
    return new Promise((resolve, reject) => {

        const outputPath = path.join(__dirname, "..", "..", "public", "videos", `${inputVideo.filename.split('.')[0]}.m3u8`);

        const onComplete = () => {
            resolve(`${inputVideo.filename.split('.')[0]}.m3u8`);
        };

        //generate-hls-files--------
        ffmpeg(inputVideo.path, { timeout: 432000 })
            .addOptions([
                '-profile:v baseline',
                '-level 3.0',
                '-start_number 0',
                '-hls_time 10',
                '-hls_list_size 0',
                '-f hls'
            ])
            .output(outputPath)
            .on('end', onComplete)
            .on('error', reject)
            .run();
    });
};