const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountPassword);
console.log(accountEmail);
{
  var accountPassword = "3456789";
  console.log(accountPassword);
  let accountEmail = "dsfj@google.com";
  console.log(accountEmail);
}
console.log(accountPassword);
console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
