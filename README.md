# plooto-take-home-assignment 

This project uses the latest version on Cypress.io and Percy to run visual regression tests on the static test site. 

Percy was used because it's one of the few visual testing tools that is verifed by Cypress. (https://docs.cypress.io/plugins#Visual%20Testing)

Cypress commands are asynchronous and get queued for execution at a later time. While commands are executed, their subjects are yielded from one command to the next. 

## Installation

Use npm to install Cypress and Percy.

https://docs.cypress.io/guides/getting-started/installing-cypress

https://docs.percy.io/docs/cypress

## Usage

Run visual regression tests for plooto prompt. 

npx cypress open  

npx percy exec -- cypress run

## Results 

![percy results](https://user-images.githubusercontent.com/76990568/214371358-d3e81684-02ee-4827-be42-c2ec7ab9ddd9.png)

https://user-images.githubusercontent.com/76990568/214371771-78c6e570-2d3b-42ab-9d32-862ed6c0ead7.mp4

![percy results](https://user-images.githubusercontent.com/76990568/214380079-7893b012-b8ea-481d-aa0d-b4d2e49d7e80.png)

![percy results](https://user-images.githubusercontent.com/76990568/214380109-b0566d91-0c4c-4c2f-98a4-624ffeea583d.png)

