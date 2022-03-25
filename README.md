# why

A tool to document your package.json scripts

## Why why?

As your project grows you add more scripts to package.json.  
When a new member joins the project (or maybe you come back after a break) it's hard to understand from the script itself, what it is doing and **why** it was created.  
There is no good solution to comment npm scripts from your package.json.  
This is why `npx why` exists!

## Demo

![npx why demo](demo.gif)

## Usage

```bash
npx why --init # will create a package-why.json file where you can write docs for your scripts
npx why test # will display docs for 'npm run test' command
```
