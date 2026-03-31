#!/usr/bin/env node
/**
 * Build script — updates the `lastUpdated` timestamp in data.json.
 * Run: node build.js
 *   or: npm run build
 */

const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "data.json");
const data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

data.lastUpdated = new Date().toISOString();

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2) + "\n");
console.log("Build complete. lastUpdated →", data.lastUpdated);
