# why

![version](https://badgen.net/npm/v/why)
![npm downloads](https://badgen.net/npm/dm/why)
![dependents](https://badgen.net/npm/dependents/why)
![publish](https://badgen.net/packagephobia/publish/why)
[![Hits-of-Code](https://hitsofcode.com/github/strdr4605/why?branch=master)](https://hitsofcode.com/github/strdr4605/why/view?branch=master)

A tool to document your package.json scripts

## Why why?

As your project grows you add more scripts to package.json.  
When a new member joins the project (or maybe you come back after a break) it's hard to understand from the script itself, what it is doing and **why** it was created.  
There is no good solution to comment npm scripts from your package.json.  
This is why `npx why` exists!

## Demo

![npx why demo](https://raw.githubusercontent.com/strdr4605/why/master/support/assets/demo.gif)

## Usage

```bash
npx why --init # will create a package-why.json file where you can write docs for your scripts
npx why test # will display docs for 'npm run test' command
```

For better experience install the package as devDependencies:

```bash
npm install why --save-dev
```
