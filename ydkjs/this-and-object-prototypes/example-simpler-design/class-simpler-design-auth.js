var auth = new AuthController(
  // in addition to inheritance, we also need composition
  new LoginController()
);
auth.checkAuth();
