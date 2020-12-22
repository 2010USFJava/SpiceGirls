# SpiceGirls

Angular Master Template instructions:

[1] Download the folder: spicegirls-angular-all

[2] Import folder into Visual Studio

[3] Run the following terminal commands in Visual Studio's Terminal:

- Install dependencies:

   `npm install bootstrap jquery --save`
   
   `npm install @fortawesome/fontawesome-svg-core`
  
   `npm install @fortawesome/free-solid-svg-icons`
  
   `npm install @fortawesome/angular-fontawesome@0.5.0`

- Run application:

   `ng serve -o`
   
[4] Access Data Through Angular (Application Layer)

  http://localhost:4200/post 
  
  http://localhost:4200/list
  
  http://localhost:4200/${id_num}
  
[5] Access Data through STS (Business Layer)
  
  http://localhost:8088/spice/post
  
  http://localhost:8088/login/list
  
  http://localhost:8088/login/{id}
  
  http://localhost:8088/login/username/{username}
  
  http://localhost:8088/like/list
  
[6] To update use `npm install` to make sure you have everything up to date that you need for development.


