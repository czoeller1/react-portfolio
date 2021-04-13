const ghpages = require("gh-pages");

ghpages.publish("build", { branch: "master", remote: "website" }, (err) =>
  console.log(err)
);
