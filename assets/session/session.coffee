angular.module('fh.userSession', [])
.factory("SessionService", () ->
  session =
    IsLogged: false
    Id: ''
    UserId: ''
    Role: ''
    Email: ''
    Country: ''
    IsAdmin: false
  session
)