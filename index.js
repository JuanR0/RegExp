<!DOCTYPE html>
<html>
  <body>
    <h1>Expresiones regulares</h1>
    <h2>Ingrese los valores correctos</h2>

    <p>RFC: <br><input type="text" id="rfc" value="LLLL111111AAA"><label id = "rfcValido">&nbsp Por validar</label></p>
    <p>Fecha: <br><input type="text" id="fecha" value="DD/MM/AAAA"><label id = "fechaValida">&nbsp Por validar</label></p>
    <p>Hora: <br><input type="text" id="hora" value="HH:MM"><label id = "horaValida">Por validar</label></p>
    <p>Email: <br><input type="text" id="email" value="gertrudiz@ejemplo.com"><label id = "emailValido">&nbsp Por validar</label></p>
    <p>Direccion MAC: <br><input type="text" id="dirMAC" value="AA:AA:AA:AA:AA:AA"><label id = "dirMACValida">Por validar</label></p>
    <p>Direccion IP: <br><input type="text" id="dirIP" value="255.255.255.255"><label id = "dirIPValida">&nbsp Por validar</label></p>


    <button onclick="validarRFC(),validarFecha(),validarHora(),validarEmail(),validarDirMAC(),validarDirIP()">Validar</button>

    <script>

    function validarRFC() {
      var txt=document.getElementById("rfc").value;
      var RFC_regex = /^[A-Z]{4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1\d|2\d|3[01])(\d|[A-Z]){3}$/;
      if ((RFC_regex.test(txt))) {
        document.getElementById("rfcValido").innerHTML = "RFC valido";
      }
      else{
        document.getElementById("rfcValido").innerHTML = "RFC no valido";
      }
    }

    function validarFecha() {
      var txt=document.getElementById("fecha").value;
      var fecha_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/([1-9]|0[1-9]|1[0-2])\/\d{4}$/;
      if ((fecha_regex.test(txt))) {
        document.getElementById("fechaValida").innerHTML = "Fecha valida";
      }
      else{
        document.getElementById("fechaValida").innerHTML = "Fecha no valida";
      }
    }

    function validarHora() {
      var txt=document.getElementById("hora").value;
      var hora_regex = /^([0-9]|[0-1][0-9]|2[0-3])\:([0-5][0-9])$/;
      if ((hora_regex.test(txt))) {
        document.getElementById("horaValida").innerHTML = "Hora valida";
      }
      else{
        document.getElementById("horaValida").innerHTML = "Hora no valida";
      }
    }

    function validarEmail() {
      var txt=document.getElementById("email").value;
      var email_regex = /^([A-Z]|[a-z])([A-Z]|[a-z]|[0-9]|\_|\-|\.)*@([a-z]|[A-Z])+(.([A-Z]|[a-z]){2,3})+$/;
      if ((email_regex.test(txt))) {
        document.getElementById("emailValido").innerHTML = "Email valido";
      }
      else{
        document.getElementById("emailValido").innerHTML = "Email no valido";
      }
    }

    function validarDirMAC() {
      var txt=document.getElementById("dirMAC").value;
      var dirMAC_regex = /^(([0-9]|[A-F]){2}:){5}([0-9]|[A-F]){2}$/;
      if ((dirMAC_regex.test(txt))) {
        document.getElementById("dirMACValida").innerHTML = "Direccion MAC valida";
      }
      else{
        document.getElementById("dirMACValida").innerHTML = "Direccion MAC no valida";
      }
    }

    function validarDirIP() {
      var txt=document.getElementById("dirIP").value;
      var dirIP_regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
      if ((dirIP_regex.test(txt))) {
        document.getElementById("dirIPValida").innerHTML = "Direccion IP valida";
      }
      else{
        document.getElementById("dirIPValida").innerHTML = "Direccion IP no valida";
      }
    }

    </script>
  </body>
</html>