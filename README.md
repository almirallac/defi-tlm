# defi-tlm
- Link of the demo : [Link](https://defi-tlm.herokuapp.com/)
- Technology names from :https://www.fantasynamegenerators.com/ninja-names.php
- Dropped them in a google sheet file and did regex to fix the data : https://docs.google.com/spreadsheets/d/13daoXaZZmMc5UuWAS0T0xpju2q9QYlKicWdgrQBJelc/edit?usp=sharing


# For prod
- If you modify the frontend at anypoint, you need to create a react build by running the following command:  ```npm run build```.
- The django view is setup to see the html react build but will not work in dev mode.
- Then you have to do the following to generate the django static files for production: ```python manage.py collectstatic```.

## Run the backend with frontend build in staticfiles
- Install docker on your machine
- While being in the backend directory run the following :```docker-compose build```.
- Then to start the project run : ```docker-compose up```.
- The front end used in the docker is from frontend/build

## Run frontend and backend separately
- You need to have the backend up first since the frontend is dependent on it. On root project run ``` python manage.py migrate ``` if it's the first time opening the project. Then to run the Django app do ``` python manage.py runserver ```.
- Then you can run the frontend dev environment. If it's the first time running the project you need to install all the dependencies ```npm install```. Then you can run it by doing ``` npm start ```.

### Backend quick notes
- Collect static files for prod: ``` python manage.py collectstatic```.
- Migrate the app database ``` python manage.py migrate ```.
- Create a super user for django admin: ``` python manage.py createsuperuser --email admin@example.com --username admin ```.
- Update database modifications with the models: ``` python manage.py makemigrations ``` then ``` python manage.py migrate ```
- Run Test: ``` python  manage.py test ninja_generator```.

### Frontend quick notes
- Starts the development server: ```npm start```.
- Bundles the app into static files for production: ```npm run build```.
- Starts the test runner: ```npm test```.

