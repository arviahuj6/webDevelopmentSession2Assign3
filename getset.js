var GetterSetter = (function () {
    function GetterSetter() {
    }
    Object.defineProperty(GetterSetter.prototype, "UserName", {
        //getter method
        get: function () {
            return this.username;
        },
        //setter method
        set: function (name) {
            this.username = name;
        },
        enumerable: true,
        configurable: true
    });
    //method which validates the argument
    GetterSetter.prototype.validateuser = function () {
        var name = this.UserName;
        if (name === "Arvind") {
            return "The username argument : " + name + " is valid";
        }
        else {
            return "The user is not valid";
        }
    };
    return GetterSetter;
}());
var getset = new GetterSetter();
getset.UserName = "Arvind";
var validate = getset.validateuser();
console.log(validate);
