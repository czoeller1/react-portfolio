const ghpages = require("gh-pages");

ghpages.publish("build", { branch: "main", remote: "website" }, (err) =>
  console.log(err)
);
