class GetterSetter {
	private username : string;

	//getter method
	get UserName():string {
		return this.username;
	}

	//setter method
	set UserName(name : string){
		this.username = name;
	}

	//method to validate the argument
	validateuser() : string{
		var name = this.UserName;
		if(name === "Arvind"){
			return `The username argument : ` + name + ` is a valid user` ;
		} else {
			return `The user is not valid`;
		}
	}
}

let getset = new GetterSetter();
getset.UserName="Vansh";

let validate = getset.validateuser();
console.log(validate);