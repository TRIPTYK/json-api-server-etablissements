"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonapi_server_1 = require("@triptyk/jsonapi-server");
const server = new jsonapi_server_1.JsonApiServer();
// auth entity
server.register("dataJson/users.json");
server.register("dataJson/etablissement-types.json");
server.register("dataJson/codes-postaux.json");
server.register("dataJson/etablissements.json");
server.register("dataJson/addresses.json");
server.setupServer().then((app) => {
    app.listen(jsonapi_server_1.Configuration.configuration.port, () => {
        console.log(`Mockup server running on port ${jsonapi_server_1.Configuration.configuration.port}`);
    });
});
