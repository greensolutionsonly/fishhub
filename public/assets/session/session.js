angular.module('fh.userSession', []).factory("SessionService", function() {
  var session;
  session = {
    IsLogged: false,
    Id: '',
    UserId: '',
    Role: '',
    Email: '',
    Country: '',
    IsAdmin: false
  };
  return session;
});
