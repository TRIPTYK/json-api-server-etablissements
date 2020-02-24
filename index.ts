import { JsonApiServer , Configuration } from "@triptyk/jsonapi-server";

const server = new JsonApiServer();

// auth entity
server.register("dataJson/users.json");

server.register("dataJson/etablissement-types.json");
server.register("dataJson/codes-postaux.json");
server.register("dataJson/etablissements.json");
server.register("dataJson/addresses.json");

server.setupServer().then((app) => {
    app.listen(Configuration.configuration.port,() => {
        console.log(`Mockup server running on port ${Configuration.configuration.port}`);
    });
});