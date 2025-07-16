import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { PodcastTransferModel } from "../models/podcast-transfer-model";

const DEAFULT_CONTENT = { "Content-Type": ContentType.JSON };
// GET: getListEpisodes
export const getListEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode, DEAFULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
}

// GET: getFilterEpisodes
export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse
) => {

    const content: PodcastTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode, DEAFULT_CONTENT);
    res.write(JSON.stringify(content.body));
    res.end();
}