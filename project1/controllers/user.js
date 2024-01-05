const User = require("../models/user.js");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find();
  if (!allUsers) return res.status(404).json({ message: "No Users Found" });
  return res
    .status(200)
    .json({ message: "success", count: allUsers.length, data: allUsers });
}

async function getUserById(req, res) {
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
}

async function updateUserById(req, res) {
  console.log(req.body.first_name);

  const updatedUser = await User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
  });
  return res
    .status(200)
    .json({ message: "User Updated Successfully", data: updatedUser });
}

async function deleteUserById(req, res) {
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  return res
    .status(200)
    .json({ message: "User Deleted Successfully", data: deletedUser });
}

async function createUser(req, res) {
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
    const result = await User.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      gender: body.gender,
      job_title: body.job_title,
    });
    return res.status(201).json({ message: "Success", data: result._id });
  }
}

module.exports = {
  handleGetAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
