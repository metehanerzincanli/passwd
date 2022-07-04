module.exports.generatePassword = function generatePassword({ length, mode, object }) {
    if(object == undefined) object = true;
    if (!length) length = 16;
    if (!mode) mode = 3;
    if (mode > 3) mode = 3;
    if (mode < 1) mode = 1;
  
    // generate a random password
    let password = "";
    let characters;
  
    /*
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+";
    */
   
    if (mode == 1) characters = "1234567890";
    if (mode == 2)
      characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    if (mode == 3)
      characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  
    for (var i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
  
    // returning object
    if (object == true) {
      if (length < 8)
        return {
          password: null,
          err: true,
          errormessage: "Password must be at least 8 characters long.",
        };
      else return { password: password, err: false, errormessage: null };
    } else {
      if (length < 6) return (password = null);
      else return (password = password);
    }
  };  