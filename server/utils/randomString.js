const string = ["a", "b", "c", "d", "e", "f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u", "v", "w", "x","y", "z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const genrateRandomString = (length) =>{
    let string1 = ""
    // This for loop should do is genrate any random number which we can pick form the above given arrey of stirng
    for(let i = 0; i< length; i++){
        let number = Math.floor(Math.random()*52);
         let char = string[number]
         string1 = string1 + char
     }
return string1
}
export default genrateRandomString