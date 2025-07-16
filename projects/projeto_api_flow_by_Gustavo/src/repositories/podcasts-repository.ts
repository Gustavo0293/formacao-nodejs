import fs from "fs";
import path from "path";
import { PodcastModel as PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcasts = async (
    slugName?: string
): Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if(slugName) {
        jsonFile = jsonFile.filter(
            (podcast: PodcastModel) => podcast.slug === slugName
        );
    }

    return jsonFile;
};