# Project overview
This is a Selenium script that can read the Twitter home page (on your local
computer) and fetch the top 5 trending topics on twitter and store the
results in a MongoDB database (fields in db – unique ID, name of
top 5 trends date , time of end of Selenium script).All of this is done by simply 
clicking on the button of homepage of this webapp.

# Techstack used
### 1.Selenium 
### 2.NodeJS
### 3.MongoDB
### 4.HTML,CSS 

# Project setup
1.use git clone to copy this project from this repository using command "git clone <project_url>"
<br>
2.install all the necessary libraries for this projects 
<br>
    &emsp;npm install selenium-webdriver dotenv express hbs mongodb nodemon
<br>
3.create a .env file in the project same as .env-example file and fill in your credentials
<br>
4.run start the webpage by running the command "npm start" as a developer .
<br>
5. Now, the server is up and running , just open any browser and go to "http://localhost:3000/"
