const accountID = 2729
let accountEmail = "tickler2k14@gmail.com"
var accountPassword = "1234"
accountCity = "Delhi"
let accountState; //undefined

// accountID = 2728 -> not allowed since its const

accountEmail = "tickler2k13@gmail.com"
accountPassword = "12345"
accountCity = "New York"

/*
    Prefer not to use var 
    because of issue in block and functional scope
    neither the 4th method
    use let or const
    semicolons are optional but good practice
*/
console.log(accountID)
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]) //print data in a table  