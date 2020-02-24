ETABLISSEMENTS TEST

## Setup 

-> install typescript globally

`yarn global typescript` OR `npm install typescript -g`

-> install dependencies

`yarn install` OR `npm install`

## Run

`tsc && node ./dist/index.js`

## JSON models 

You can provide json models that will be be automatically loaded into the fake database
    
```json
{
  "projects": [
    {
      "id": "1",
      "title": "Project One",
      "details": "This is a sample project",
      "percentComplete": 20,
      "approved": false,
      "startDate": null,
      "targetDate": null,
      "completionDate": null,
      "customers#creator": "1",
      "customers#customers": [
        "1",
        "2"
      ]
    },
    {
      "id": "2",
      "title": "Project Two",
      "details": "This is a sample project",
      "percentComplete": 40,
      "approved": false,
      "startDate": null,
      "targetDate": null,
      "completionDate": null,
      "customers#creator": "2",
      "customers#customers": [
        "1",
        "2"
      ]
    },
    {
      "id": "3",
      "title": "Project Three",
      "details": "This is a sample project",
      "percentComplete": 60,
      "approved": false,
      "startDate": null,
      "targetDate": null,
      "completionDate": null,
      "customers#creator": "3",
      "customers#customers": [
        "1",
        "2"
      ]
    }
  ]
}
```

### Relations

Relations are recognized this way : `"<entityType>#<relationName>": "<id>",`

```json
    "customers#creator": "3",
```

The id can also be an array of ids : 

```json
    "customers#creators": ["3","2","1"],
```

:note: : the IDs MUST exist otherwise it will throw errors on startup

#### Relations are created two ways :

```json
    "customers#creators": ["3","1"]
```

if your relation is in a projects.json file , customers will create a projectsCreators relationship on the projects entity side.

#### Notes  

- Only one to one , one to many and many to one are supported at the moment.
- Querying deeper than first level relations is also WIP.

## JSON-API

### Supported features : 

- includes (1 level)
- pagination
- sorting
- sparse fieldsets
- filters
    - eq : \<value\>
    - noteq : \<value\>

- creating entity
- updating entity
- deleting entity 

## Configuration

You can create a configuration file in config/configuration.json with these values , it will override the default configuration

```json
{
    "pluralizeSerializers": false,
    "authEntity": "users",
    "convertCase": "kebab-case",
    "unconvertCase": "kebab-case",
    "port":8000,
    "jwtAuthKey":"patate",
    "jwtExpiration":2
}
```

## Example

```ts
  import { JsonApiServer, Configuration } from "@triptyk/jsonapi-server";
  import { Request, Response, NextFunction } from "express";

  const server = new JsonApiServer();

  server.Router.use((req,res,next) => {
      console.log("Hello");
      next();
  });

  server.Router.route("/status") 
      .get((req: Request,res: Response,next: NextFunction) => {
          res.sendStatus(200);
      });

  server.register("data/projects.json");
  server.register("data/customers.json");
  server.register("data/users.json");

  server.setupServer().then((app) => {
      app.listen(Configuration.configuration.port,() => {
          console.log(`Mockup server running on port ${Configuration.configuration.port}`);
      });
  });
```