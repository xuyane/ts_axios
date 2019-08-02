var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return User;
}());
function greeterOne(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
// let peopleOne = {
//   firstName:'xu',
//   lastName:'baobao'
// } 
var user = new User('xu', 'baobao');
console.log(greeterOne(user));
