// Parent Class
function Controller() {
  this.errors = [];
}
Controller.prototype.showDialog = function(title, msg) {
  // display title & message to user in dialog
};
Controller.prototype.success = function(msg) {
  this.showDialog("Success", msg);
};
Controller.prototype.failure = function(err) {
  this.errors.push(err);
  this.showDialog("Error",err);
};


// Child Class 1
function LoginController() {
  Controller.call(this);
}
// Link Child 1 to Parent
LoginController.prototype = Object.create(Controller.prototype);
LoginController.prototype.getUser = function() {
  return document.getElementById("login_username").value;
};
LoginController.prototype.getPassword = function() {
  return document.getElementById("login_password").value;
};
LoginController.prototype.validateEntry = function(user,pw) {
  user = user || this.getUser();
  pw = pw || this.getPassword();

  if (!(user && pw)) {
    return this.failure("Please enter a username & password!");
  }
  else if (pw.length < 5) {
    return this.failure("Password must be 5+ characters!");
  }

  // got here? validated!
  return true;
};
// Override to extend base 'failure()'
LoginController.prototype.failure = function(err) {
  // "super" call
  Controller.prototype.failure.call(this, "Login invalid: " + err);
};


// Child Class 1
function LoginController() {
  Controller.call(this);
}
// Link Child 1 to Parent
LoginController.prototype = Object.create(Controller.prototype);
LoginController.prototype.getUser = function() {
  return document.getElementById("login_username").value;
};
LoginController.prototype.getPassword = function() {
  return document.getElementById("login_password").value;
};
LoginController.prototype.validateEntry = function(user,pw) {
  user = user || this.getUser();
  pw = pw || this.getPassword();

  if (!(user && pw)) {
    return this.failure("Please enter a username & password!");
  }
  else if (pw.length < 5) {
    return this.failure("Password must be 5+ characters!");
  }

  // got here? validated!
  return true;
};
// Override to extend base 'failure()'
LoginController.prototype.failure = function(err) {
  // "super" call
  Controller.prototype.failure.call(this, "Login invalid: " + err);
};


var auth = new AuthController(
  // in addition to inheritance, we also need composition
  new LoginController()
);
auth.checkAuth();
