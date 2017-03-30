// Child Class 2
function AuthController(login) {
  Controller.call(this);
  // in addition to inheritance, we also need composition
  this.login = login;
}
// Link Child 2 to Parent
AuthController.prototype = Object.create(Controller.prototype);
AuthController.prototype.server = function(url,data) {
  return $.ajax( {
    url: url,
    data: data
  });
};
AuthController.prototype.checkAuth = function() {
  var user = this.login.getUser();
  var pw = this.login.getPassword();

  if (this.login.validateEntry(user,pw)) {
    this.server("/check-auth",{
      user: user,
      pw: pw
    })
    .then(this.success.bind(this))
    .fail(this.failure.bind(this));
  }
};
// Override to extend base 'success()'
AuthController.prototype.success = function() {
  // "super" call
  Controller.prototype.success.call(this,"Authenticated!");
};
// Override to extend base 'failure()'
AuthController.prototype.failure = function(err) {
  // "super" call
  Controller.prototype.failure.call(this,"Auth Failed: " + err);
};
