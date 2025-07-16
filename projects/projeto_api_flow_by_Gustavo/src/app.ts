import * as http from "http";
import { 
    getFilterEpisodes, 
    getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import { StatusCode } from "./utils/status-code";
import { ContentType } from "./utils/content-type";

export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse) => {
        
    const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];

    console.log(`🌐 ${request.method} 🔛 ${baseUrl} ⚙️ ${queryString}`);
        
    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
        return;
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
        return;
    }

    let result = "";

    if(queryString !== undefined) {
        result = queryString;
    }

    const content = `Erro 404 - ${baseUrl}?${result}`;

    response.writeHead(StatusCode.NOT_FOUND, { "Content-Type": ContentType.JSON });
    response.end(JSON.stringify(content));
};