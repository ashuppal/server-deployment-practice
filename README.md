LAB - Class 01

Project: Server Deployment Practice

Author: Ashwini Uppal

#### Problem Domain
Basic API Server where we write some middleware and practice deployment. Tested this by writing 3 different test cases and running npm test. All the tests are passing and deployed app is working as expected.

#### Links and Resources

[GitHub Actions ci/cd](https://github.com/ashuppal/server-deployment-practice/actions)

#### Dev back-end server url

[ci/cd - backend server url - dev branch](https://four01-lab01.onrender.com)

#### Prod back-end server url
[ci/cd - backend server url - prod](https://lab01-prod.onrender.com)


#### Setup
.env requirements (where applicable)
not necessary for this lab

How to initialize/run your application (where applicable)
e.g. npm start



Features / Routes

 Deploy as Dev Branch once ci/cd works.
 Merge dev branch into main.

#### Tests

Started with one test for handling the error for middleware logger.js
After that added more tests to check if the code runs as expected for 500 and 404 errors.
https://four01-lab01.onrender.com/bad 
(this will give 500 error)

https://four01-lab01.onrender.com/path-not-found
(this will give 404 error)

 #### UML


![lab01 UML](assets/UML.png)

