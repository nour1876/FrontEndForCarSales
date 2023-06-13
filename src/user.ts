export class user {
  id:number;
  email:String;
  password:String;
  username:String;
  adress:String;
  phone:String;
  image:String
  constructor(id:number, email:String, password:String, username:String, adress:String,phone:String,
    )
  {
    this.id = id;
    this.email = email;
    this.password = password;

    this.username= username;
    this.adress = adress;
    this.phone=phone;
    
  }
}
