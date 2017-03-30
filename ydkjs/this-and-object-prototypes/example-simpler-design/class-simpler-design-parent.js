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
