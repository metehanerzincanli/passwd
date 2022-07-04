module.exports.generateCode = function generateCode({ length, object }) {
    if(object == undefined) object = true;
    if(length > 8) length = 8;
    if (!length) length = 6;
    if(length < 4) length = 4;
  
    // generate a random code
    let code = "";
    let numbers = "0123456789";
    
    for (var i = 0; i < length; i++) {
      code += numbers.charAt(
        Math.floor(Math.random() * numbers.length)
      );
    }
  
    // returning object
    if (object == true) {
      if (length > 8)
        return {
          code: null,
          err: true,
          errormessage: "Code must be at most 8 characters long.",
        };
      else return { code: code, err: false, errormessage: null };
    } else {
      if (length < 6) return (code);
      else return (code = code);
    }
  };  