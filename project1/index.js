const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const Port = 8000;
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

app.listen(Port, () => {
  console.log("App listening on", Port);
});
//Routes

app.get("/users", (req, res) => {
  const html = `
     <ul>
     ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
     <ul>
     `;
  res.send(html);
});

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const user = users.find((item) => item.id == Number(req.params.id));
    return res.json(user);
  })
  .put((req, res) => {
    const user = users.find((item) => item.id == Number(req.params.id));
    Object.assign(user, req.body);
    return res.status(200).json(user);
  })
  .delete((req, res) => {
    const index = users.findIndex((item) => item.id == Number(req.params.id));
    console.log("index is", index);
    users.splice(index, 1);
    return res.status(200).json(index);
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  const newUserId = users.length + 1;
  users.push({ id: newUserId, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: newUserId });
  });
});

// app.put("/api/users/:id", (req, res) => {
//   const user = users.find((item) => item.id == Number(req.params.id));
//   Object.assign(user, req.body);
//   res.status(200).json(user);
// });

// app.delete("/api/users/:id", (req, res) => {
//   const index = users.findIndex((item) => item.id == Number(req.params.id));
//   console.log("index is", index);
//   users.splice(index, 1);
//   res.status(204).json(index);
// });
