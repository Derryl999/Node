var fs = require("fs");

//deleting a file
fs.unlink("test.txt", (err) => {
  if (err) console.log("may be file not found");
});

//synchronous creating directory
fs.mkdirSync("test_dir");

//synchronous removing directory
fs.rmdirSync("test_dir");

//asynchronous creating directory
fs.mkdir("test_dir", function () {
  fs.readFile("test.txt", "utf8", function (err, data) {
    fs.writeFile("./test_dir/writeMe.txt", data, (err) => {});
  });
});

//removing file inside the directory and then  the directory itesef using async method
fs.unlink("./test_dir/writeMe.txt", function () {
  fs.rmdir("test_dir", (err) => {
    console.log(err);
  });
});
