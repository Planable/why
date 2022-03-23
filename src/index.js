#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const packagePath = path.join(process.cwd(), "./package.json");
const package = fs.readFileSync(packagePath);
const packageObj = JSON.parse(package);

const packageWhyPath = path.join(process.cwd(), "./package-why.json");

const arg = process.argv[2];
if (!arg) {
  if (!fs.existsSync(packageWhyPath)) {
    console.log("package-why.json does not exist, please run npx why --init");
    return;
  }

  const packageWhy = fs.readFileSync(packageWhyPath);
  const whyObj = JSON.parse(packageWhy);
  const packageScripts = packageObj["scripts"];
  const whyScriptsDesc = whyObj["scripts"];

  for (const scriptName of Object.keys(packageScripts)) {
    const desc = whyScriptsDesc[scriptName];
    const packageScript = packageScripts[scriptName];

    console.log(`\n\x1b[32m${scriptName}\x1b[0m:`);
    console.log(
      "\x1b[33m%s\x1b[0m",
      `\n  ${
        desc ||
        `Description for '${scriptName}' not found in package-why.json, please ask maintainer to add it`
      }\n`
    );
    console.log(`  script: \x1b[32m${packageScript}\x1b[0m`);
    console.log(`  try it: \x1b[35mnpm run ${scriptName}\x1b[0m`);
  }
  return;
}

if (arg === "--init") {
  if (fs.existsSync(packageWhyPath)) {
    console.log("package-why.json exists, run npx why <somescript>");
    return;
  }
  const newPackageWhyObj = {
    scripts: {},
  };

  for (const key of Object.keys(packageObj["scripts"])) {
    newPackageWhyObj["scripts"][
      key
    ] = `Description for 'npm run ${key}' command`;
  }

  fs.writeFileSync(
    packageWhyPath,
    JSON.stringify(newPackageWhyObj, undefined, 2)
  );
  return;
}

const scriptName = arg;
// console.log(packageWhyPath, packagePath);

const packageWhy = fs.readFileSync(packageWhyPath);

const whyObj = JSON.parse(packageWhy);

const packageScript = packageObj["scripts"][scriptName];
if (!packageScript) {
  console.log(
    "\x1b[31m%s\x1b[0m",
    `script '${scriptName}' not found in package.json`
  );
  return;
}
const desc = whyObj["scripts"][scriptName];

console.log(
  "\x1b[33m%s\x1b[0m",
  `\n  ${
    desc ||
    `Description for '${scriptName}' not found in package-why.json, please ask maintainer to add it`
  }\n`
);
console.log(`  script: \x1b[32m${packageScript}\x1b[0m`);
console.log(`  try it: \x1b[35mnpm run ${scriptName}\x1b[0m`);
