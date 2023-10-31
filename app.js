let helper = require("./helper");

let list = helper.getAllUser();
console.log(list);
helper.getFirstUser(list)
helper.getLast(list)
helper.getUserByID(list,10)
helper.getUserByCompanyName(list,"Hoeger LLC")
helper.getUsersByCity(list,"Wisokyburgh")
helper.getStreet(list,4)
helper.addNewUser(list, {
    id: 12,
    name: "John",
    username: "Joh",
    email: "John.OConner@kory.org"
})
helper.updateUser(list,9)
helper.deleteUserById(list, 10)
