const concurrently = require("concurrently");
const upath = require("upath");

let port = 9000;
process.argv.forEach((arg) => {
  if (arg.includes("--port=")) {
    port = arg.replace("--port=", "");
  }
});
console.log("Using port", port);

const browserSyncPath = upath.resolve(
  upath.dirname(__filename),
  "../node_modules/.bin/browser-sync"
);

concurrently(
  [
    {
      command: "node scripts/sb-watch.js",
      name: "SB_WATCH",
      prefixColor: "bgBlue.bold",
    },
    {
      command: `"${browserSyncPath}" --reload-delay 2000 --reload-debounce 2000 dist -w --no-online --port ${port} --ui 0 --no-open`,
      name: "SB_BROWSER_SYNC",
      prefixColor: "bgGreen.bold",
    },
  ],
  {
    prefix: "name",
    killOthers: ["failure", "success"],
  }
).then(success, failure);

function success() {
  console.log("Success");
}

function failure() {
  console.log("Failure");
}
