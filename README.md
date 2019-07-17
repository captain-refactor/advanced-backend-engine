# Advanced Backend Engine (Abe)
This engine implements several architecture patterns in an easy to use way.

## Patterns
- Event sourcing
- Rest api
- Resthooks 
- GraphQL api

## Functional requirements
- Rest api
    - get current resource state 
    - get state at provided time
    - update state
    - delete resource
    - cache resource state using snapshots
- Resthooks 
    - allow clients to subscribe
    - notify subscribers when resource changes
- Client libraries
    - provide typings
- CI/CD friendly
- Type safe
- versatile, any part can be extended or replaces
- Oauth2 and OpenID authentification

## Language
Typescript because it gives us type safety with flexibility and access to node modules.

## Approach
The engine works in two stages:
1. Code generation
1. Build

The generated code should not be edited and will be places in src/generated directory.
Developer works on top of the generated code and uses dependency injection to extend or replace generated code.

This approach with generated code with dependency injection will lead to increased productivity in the longterm.

## Project structure
- src
    - generated
    - tests
    - entrypoints - this directory contains all entrypoints
        - index.ts - main application entrypoint
- abe.yaml - Abe configuration
