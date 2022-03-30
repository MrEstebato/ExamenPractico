function getCleanedString(cleanStr) {
  var specialChars = "!@#$^&%*()+=-[]/{}|:<>?,.";
  for (var i = 0; i < specialChars.length; i++) {
    cleanStr = cleanStr.replace(new RegExp("\\" + specialChars[i], "gi"), "");
  }
  cleanStr = cleanStr.toLowerCase();
  cleanStr = cleanStr.replace(/ /g, "_");
  cleanStr = cleanStr.replace(/á/gi, "a");
  cleanStr = cleanStr.replace(/é/gi, "e");
  cleanStr = cleanStr.replace(/í/gi, "i");
  cleanStr = cleanStr.replace(/ó/gi, "o");
  cleanStr = cleanStr.replace(/ú/gi, "u");
  cleanStr = cleanStr.replace(/ñ/gi, "n");
  return cleanStr;
}

function setNameDefault() {
  document.main.userName.style.background = "aquamarine";
}
function setln1Default() {
  document.main.lastName1.style.background = "aquamarine";
}
function setln2Default() {
  document.main.lastName2.style.background = "aquamarine";
}
function setbdDefault() {
  document.main.birthday.style.background = "aquamarine";
}
function passReset() {
  document.main.passwordResult.style.background = "bisque";
  document.getElementById("passwd").readOnly = true;
}

function generate() {
  userName = document.main.userName.value;
  lastName1 = document.main.lastName1.value;
  lastName2 = document.main.lastName2.value;
  birthday = document.main.birthday.value;

  if (userName.length > 0) {
    if (lastName1.length > 0) {
      if (lastName2.length > 0) {
        if (birthday.length > 0) {
          alert("Se va a generar el correo y la contraseña correspondiente");
          //generación de correo
          fLetter = getCleanedString(userName.charAt(0));
          middle = getCleanedString(lastName1);
          lLetter = getCleanedString(lastName2.charAt(0));
          email = fLetter + middle + lLetter + "@empresa.com.mx";
          document.main.mailResult.value = email;

          //generación de contraseña
          day = birthday.substr(8, 2);
          month = birthday.substr(5, 2);
          year = birthday.substr(2, 2);
          document.main.passwordResult.value = day + month + year;
          document.getElementById("passwd").readOnly = false;
          document.getElementById("passwd").style.background = "aquamarine";
        } else {
          alert("Error: Verifique sus datos en fecha de nacimiento");
          document.main.birthday.style.background = "red";
        }
      } else {
        alert("Error: Verifique sus datos en apellido materno");
        document.main.lastName2.style.background = "red";
      }
    } else {
      alert("Error: Verifique sus datos en apellido paterno");
      document.main.lastName1.style.background = "red";
    }
  } else {
    alert("Error: Verifique sus datos en Nombre");
    document.main.userName.style.background = "red";
  }
}
