let list = require("./users.json");
const fs = require("fs");

const getAllUser = () => {
  try {
    const data = fs.readFileSync('users.json', 'utf8');
    let users = JSON.parse(data);
    return users;
  } catch (err) {
    console.error(err);
  }
};
const getFirstUser = (list) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  console.log(users[0]);
};

const getLast = (list) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  console.log(users[users.length - 1]);
};

const getUserByID = (list, userID) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  const user = users.filter((user) => user.id === userID);
  if (user.length > 0) {
    console.log(user);
  } else {
    console.log("User not found");
  }
};

const getUserByCompanyName = (list, companyName) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  let username = users.filter((user) => user.company.name === companyName);
  if (username) {
    console.log(username);
  } else {
    console.log("User not found");
  }
};

const getUsersByCity = (list, city) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  let username = users.filter((user) => user.address.city === city);
  console.log(city);
  if (username) {
    console.log(username);
  } else {
    console.log("User not found");
  }
};

const getStreet = (list, userID) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  let username = users.find((user) => user.id === userID);
  if (username) {
    console.log(username.address.street);
  } else {
    console.log("User not found");
  }
};

const addNewUser = (list, userObject) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  const serFound = users.find((user) => user.id === userObject.id);
  if (serFound) {
    console.log("User already exists");
  } else {
    let jsonUsers = JSON.stringify(users);
    fs.writeFileSync("users.json", jsonUsers);
  }
};

const updateUser = (list, userID) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userID) {
      users[i].email = "kkk";
    }
  }
  let jsonUsers = JSON.stringify(users);
  fs.writeFileSync("users.json", jsonUsers);
};

const deleteUserById = (list, userID) => {
  list = fs.readFileSync("users.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      try {
        let users = JSON.parse(data);
        console.log(users);
      } catch (err) {
        console.log("Parsing Error", err);
      }
    }
  });
  let users = JSON.parse(list);
  let deletedUser = users.filter((user) => userID != user.id);
  console.log(deletedUser, "the user deleted");
};

module.exports = {
  getAllUser,
  getFirstUser,
  getLast,
  getUserByID,
  getUserByCompanyName,
  getUsersByCity,
  getStreet,
  addNewUser,
  updateUser,
  deleteUserById,
};
