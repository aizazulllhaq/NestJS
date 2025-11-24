# Backend in NESTJS 

1. Creating controller/module/service - done ( user )

2.  REST API CRUD -  done ( test with thunder client vscode ) ( user )

3. dto & interfaces but without class-validator & class-transformer its not working. so we will need to install these 2 pkgs - done ( user )

    #### NOTE : TS only work on compile time ( coding time ) not in run time ( when server start ). so nest remove TS when run-time, so that's why we need to use class-validator & class-transformer

4. custom pipes - done ( user )
    - Pipes run before the data hit the route handler ( controller method ).
    - Pipes can be apply on method level & controller level & globally.
    - Custom pipe implement PipeTransformer interface.

          `nest g pipe common/pipes/uppercase`

    - pipe return data to controller.

5. Guards - done ( user )

6. Exception ( error ) filter - done ( user )

7. Middlewares - done ( user )

8. Lifecyle event/hooks/method - done ( user ) 

9. Environment Variable - done ( app module ) 

10. Mongodb connected - done ( app module )

11. Mongodb CRUD - done ( student )

12. Mongodb Relations : 
    1. One to One.
          - Embeding ( done ) ( employee )
          - Refrencing
    2. One to Many.
    3. Many to Many.


Resources :

1. The Techzeen : https://www.youtube.com/playlist?list=PL5OhSdfH4uDt6iG-qze_Q3qgik6VKHeRU ( In Progress ) 
2. NestJS Simplified : https://www.youtube.com/playlist?list=PLU-FndeNRY4DtRToRKmYF8qrZgQqzsnNR
3. Bitfumes : https://www.youtube.com/watch?v=Mgr5_r70OJQ
4. Computer Baba : https://www.youtube.com/playlist?list=PLqLR2H326bY6eRNOXJxWQkvKNlzmJQfLj
5. Coder's Gyan : https://www.youtube.com/watch?v=KMg_Qg0WCds