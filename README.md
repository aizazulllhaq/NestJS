# Backend in NESTJS 

1. Creating controller/module/service - done ( user )

2.  REST API CRUD -  done ( test with thunder client vscode ) ( user )

3. dto & interfaces but without class-validator & class-transformer its not working. so we will need to install these 2 pkgs - done ( user )

### NOTE : TS only work on compile time ( coding time ) not in run time ( when server start ). so nest remove TS when run-time, so that's why we need to use class-validator & class-transformer

4. custom pipes -  ( user )
  - Pipes run before the data hit the route handler ( controller method ).
  - Pipes can be apply on method level & controller level & globally.
  - Custom pipe implement PipeTransformer interface.

   `npm g pipe common/pipes/uppercase`