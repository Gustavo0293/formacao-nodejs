import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcasts } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: [] 
    };

    const data = await repositoryPodcasts();
    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseFormat.body = data;

    return responseFormat;
};