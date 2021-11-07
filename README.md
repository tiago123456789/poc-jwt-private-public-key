About project
===============

The project is one poc(proof of concept) about JWT using private.key and public.key. 
This strategy allow create accessToken using private.key and validate accessToken using public.key. 

The public.key can be only verify accessToken in this case decrypt, already encrypt using private.key.

OBS: this one strategy interesting to microservices in moment needs check accessToken is valid you no need send request to microservice the auth, you can use public.key to check accessToken is valid without send request to microservice the auth.

Instructions to running project:
==================================

- Clone project
- Execute command **npm i**
- Access this site: https://travistidwell.com/jsencrypt/demo/ to generate private.key and public.key
- Create file private.key in root the project
- Crate file public.key in root the project