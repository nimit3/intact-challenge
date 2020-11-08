# Intact Challenge

In this challnege, I have written down all my code using page object model(POM) framework. I have used very simple version of the POM framework. With the POM, I have segregated all the modules into their specific files.

In POM, there are total 4 different modules.

1. First is data directory. Inside of that, I have created "data.js" file. In data.js file I have written down all the data that are used in this challenge.

2. Second is webPages directory. Inside of that, I have created different webpages JS files, and inside of each file I have stored every webelements along with methods which do specific action(clicking, iserting some value from data, etc).

3. Third is the test scripts directory. Inside of that, I have created a "policyFillupTestScript.js" file. That is the main file where I have written the main automation script using the protractor. I have imported all the data and webelements from other files and have used them in the scripts here. That's how I have linked all the data and webelements into this main scripts

4. At last I have created a "conf.js" file. In that file I have written down capabilities(chrome), framework(jasmine), and the main test script file(policyFillupTestScript.js) that I want to execute using the protractor tool.

For running this code in your machine, you only need to follow given below basic steps.
step 1 - import his code.

step 2 - run the command "npm install -g protractor" (if protractor is not installed globally in your machine)

step 3 - run the command "npm install" so all the dependancy can be downloaded.

step 4 - run the command "protractor conf.js" to see the automation.
