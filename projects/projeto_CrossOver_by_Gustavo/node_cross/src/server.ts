import fastify from "fastify";
import { AdventureTime, RegularShow } from "./content/personagens";   
import cors from "@fastify/cors";

const server = fastify({ logger: true });
server.register(cors, {
    origin: "*",
})
 
server.get("/personagens", async (req, res) => {
    res.type("application/json").code(200);
    return { AdventureTime, RegularShow };
});

server.get("/personagens/AdventureTime", async (req, res) => {
    res.type("application/json").code(200);
    return AdventureTime;
});

server.get("/personagens/RegularShow", async (req, res) => {
    res.type("application/json").code(200);
    return RegularShow;
});

interface driverParams {
    id: string
}

server.get<{Params: driverParams}>("/personagens/RegularShow/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const personagem = RegularShow.find((d) => d.id === id);

    if(!personagem) {
        res.type("application/json").code(404);
        return { message: "Personagem not found!" };
    } else {
        res.type("application/json").code(200);
        return { personagem };
    }

});

server.get<{Params: driverParams}>("/personagens/AdventureTime/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const personagem = AdventureTime.find((d) => d.id === id);

    if(!personagem) {
        res.type("application/json").code(404);
        return { message: "Personagem not found!" };
    } else {
        res.type("application/json").code(200);
        return { personagem };
    }

});

server.listen({port: 3333}, ()=>{
    console.log("Server Init");
});