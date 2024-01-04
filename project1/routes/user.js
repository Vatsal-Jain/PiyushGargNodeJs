const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

// router.get("/users", async (req, res) => {
//   const allUsers = await User.find();
//   // return res.status(200).json({ data: allUsers, message: "Success" });
//   const html = `
//        <ul>
//        ${allUsers
//          .map((user) => `<li>${user.first_name} - ${user.email}</li>`)
//          .join("")}
//        <ul>
//        `;
//   res.send(html);
// });

router.get("/", async (req, res) => {
  // console.log(req.headers);
  // res.setHeader("X-myName", "vatsal jain");
  // //Always add x to custom headrs
  // return res.json(users);
  const allUsers = await User.find();
  if (!allUsers) return res.status(404).json({ message: "No Users Found" });
  return res
    .status(200)
    .json({ message: "success", count: allUsers.length, data: allUsers });
});

router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const findUser = await User.findById(req.params.id);

      if (!findUser) {
        return res.status(404).json({ message: "No User Found with That Id" });
      }

      return res.status(200).json({ message: "success", data: findUser });
    } catch (error) {
      console.error("Error finding user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  })
  .patch(async (req, res) => {
    console.log(req.body.first_name);
    // const user = users.find((item) => item.id == Number(req.params.id));
    // Object.assign(user, req.body);
    // return res.status(200).json(user);
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
      first_name: req.body.first_name,
    });
    return res
      .status(200)
      .json({ message: "User Updated Successfully", data: updatedUser });
  })
  .delete((req, res) => {
    const index = users.findIndex((item) => item.id == Number(req.params.id));
    console.log("index is", index);
    users.splice(index, 1);
    return res.status(200).json(index);
  });

router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ message: "All Fields are Required" });
  } else {
    const newUserId = users.length + 1;
    // users.push({ id: newUserId, ...body });
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    //   return res.status(201).json({ status: "success", id: newUserId });
    // });
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    return res.status(201).json({ message: "Success", data: result });
  }
});

module.exports = router;
