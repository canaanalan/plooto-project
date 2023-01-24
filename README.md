# plooto-take-home-assignment 

This project uses the latest version on Cypress.io and Percy to run visual regression tests on the static test site. 

Percy was used because it's one of the few visual testing tools that is verifed by Cypress. 

Cypress commands are asynchronous and get queued for execution at a later time. While commands are executed, their subjects are yielded from one command to the next. 

## Results 

![Screen Shot 2023-01-24 at 9 31 45 AM](https://user-images.githubusercontent.com/76990568/214371358-d3e81684-02ee-4827-be42-c2ec7ab9ddd9.png)

https://user-images.githubusercontent.com/76990568/214371771-78c6e570-2d3b-42ab-9d32-862ed6c0ead7.mp4

## Installation

Use npm to install Cypress and Percy.

https://docs.cypress.io/guides/getting-started/installing-cypress

https://docs.percy.io/docs/cypress

## Usage

Run visual regression tests for plooto prompt. 

npx cypress open  

npx percy exec -- cypress run
