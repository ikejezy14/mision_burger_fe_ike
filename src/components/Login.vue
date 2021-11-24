<template>
  <h1 class="h1_description_menu">Iniciar Sesión</h1>
  <div class="login-box">
    <form>
      <!--username-->
      <label for="username ">Usuario</label>
      <input name="username" type="text" placeholder="Digite Usuario " />
      <!--password-->
      <label for="password ">Contraseña</label>
      <input name="password" type="password" placeholder="Digite Contraseña" />
      <input type="submit" value="INGRESAR" />
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style>
.login-box {
  margin-top: 30px;
  margin-left: 450px;
  margin-right: 450px;
  background-color: #9c2713;
  color: white;
  top: 50%;
  left: 50%;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 10px;
}

.login-box h1 {
  margin: 20px;
  font-weight: bold;
  text-align: center;
  font-size: 22px;
}
.login-box label {
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
  display: block;
  font-size: 35px;
}
.login-box input {
  margin-bottom: 20px;
  text-align: center;
}
.login-box input[type="text"],
.login-box input[type="password"] {
  border: none;
  outline: none;
  height: 40px;
  width: 299px;
  padding-right: 6px;
  padding-left: 6px;
  color: black;
  font-size: 16px;
  border-radius: 10px;
  margin-left: 10%;
  font-weight: bold;
}
.login-box input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  width: 311px;
  font-size: 25px;
  font-weight: bold;
  border-radius: 10px;
  margin-top: 15px;
  margin-left: 10%;
  cursor: pointer;
  background-color: #7D1F0F;
  color:white;
}

.login-box input[type="submit"]:hover{
  background-color: #6d1d0f83;
}
</style>