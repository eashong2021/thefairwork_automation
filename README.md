# E2e Test Automation Of TheFairWork Int. Application


# Configure Cypress (Installation)
1. npm init -y (then hit the enter key on your keyboard)

2. npm install cypress --save -dev  (then hit the enter key on your keyboard)

3. npx cypress open  (then hit the enter key on your keyboard)

4. Open Cypress  
   `npm run cy:open`

5. or Run the tests  
   manually or `npm run cy:run`



# The Base Url for the entire test

baseUrl = targetUrl = https://connect-dev.amalitech-dev.net


# Device Viewport

1. name: 'iPhone'
  viewport: [320, 568]


2.   name: 'Laptop'
     viewport: [1366, 768]


     ## Spec files

`/cypress/integration/tests`

There are some other directories that contains tests:

- tests: only the test in this folder will be listed for automation in Cypress
- custom: own user test
- temp: temporary excluded test from cypress cycle.
  Move the test from inside this directory in the `/cypress/integration/tests`
  if you want to run it manually

3. Open Cypress  
   `npm run cy:open`
4. or Run the tests  
   manually or `npm run cy:run`


# Author
Ebenezer Ashong



