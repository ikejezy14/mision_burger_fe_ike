<template>
      <div class="cards-container">
      <div class="menu_inicio">
        <h1 class="h1_description_menu">Nuestro Menú</h1>
        <div class="grid">
          <div class="item1">
            <div class="card">
              <div class="producto1"></div>
              <h2 class="h2_description_menu">Hamburguesa Máster</h2>
              <ul class="description_title">
                <li>Hamburguesa doble carne de 1/2 lb</li>
                <li>Lechuga Crispy</li>
                <li>Pepinillos</li>
                <li>Cebolla</li>
                <li>Tomate</li>
                <li>Salsas</li>
              </ul>

              <h4 class="h4_description_menu">$12.300</h4>
            </div>
          </div>
          <div class="item2">
            <div class="card">
              <div class="producto2"></div>
              <h2 class="h2_description_menu">Hamburguesa de Pollo Crispy</h2>
              <ul class="description_title">
                <li>Hamburguesa de pollo crispy</li>
                <li>Lechuga Crispy</li>
                <li>Pepinillos</li>
                <li>Maduro</li>
                <li>Tocineta</li>
                <li>Champiñones</li>
                <li>Tomate</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$10.500</h4>
            </div>
          </div>
          <div class="item3">
            <div class="card">
              <div class="producto3"></div>
              <h2 class="h2_description_menu">Hamburguesa Vegetariana</h2>
              <ul class="description_title">
                <li>
                  Hamburguesa doble carne hecha a base de lentejas y especies
                </li>
                <li>Vegetales</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$18.000</h4>
            </div>
          </div>
          <div class="item4">
            <div class="card">
              <div class="producto4"></div>
              <h2 class="h2_description_menu">Hamburguesa Campeona</h2>
              <ul class="description_title">
                <li>Hamburguesa triple carne</li>
                <li>Tocineta</li>
                <li>Chorizo</li>
                <li>Maduro</li>
                <li>Vegetales</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$25.500</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="menu_2">
        <div class="grid2">
          <div class="item5">
            <div class="card">
              <div class="producto5"></div>
              <h2 class="h2_description_menu">Sandwich Burguer</h2>
              <ul class="description_title">
                <li>Sandwich relleno de carne de res</li>
                <li>Lechuga crispy</li>
                <li>Pepinillos</li>
                <li>Huevo</li>
                <li>Maiz</li>
                <li>Cebolla</li>
                <li>Tomate</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$10.500</h4>
            </div>
          </div>
          <div class="item6">
            <div class="card">
              <div class="producto6"></div>
              <h2 class="h2_description_menu">Combo Trío</h2>
              <ul class="description_title">
                <li>Dos hamburguesas de carne de res</li>
                <li>Lechuga crispy</li>
                <li>Pepinillos</li>
                <li>Maduro</li>
                <li>Tocineta</li>
                <li>Champiñones</li>
                <li>Tomate</li>
                <li>Salsas</li>
                <li>Acompañado de un Sandwich Burguer</li>
                <li>Papas</li>
              </ul>
              <h4 class="h4_description_menu">$40.500</h4>
            </div>
          </div>
          <div class="item7">
            <div class="card">
              <div class="producto7"></div>
              <h2 class="h2_description_menu">Pinchos Vegetarianos</h2>
              <ul class="description_title">
                <li>Dos pinchos de carne</li>
                <li>Garbanzo</li>
                <li>Especies</li>
                <li>Vegetales</li>
                <li>Papa</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$30.000</h4>
            </div>
          </div>
          <div class="item8">
            <div class="card">
              <div class="producto8"></div>
              <h2 class="h2_description_menu">Apanaditos de Pollo</h2>
              <ul class="description_title">
                <li>Trozos de pollo apanado</li>
                <li>Salsas</li>
              </ul>
              <h4 class="h4_description_menu">$10.500</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name:"Cards",
}
</script>

<style>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 0px 7px -3px black;
  padding: 10px;
}

.header-title {
  margin: 0;
  padding: 0;
  width: 30%;
  min-height: 90px;
  background-color: yellow;
  background-image: url("../assets/mision_burguer.png");
  background-size: 55% 150%;
  background-repeat: no-repeat;
  background-color: #ff1616;
  background-position: -5px;
}

.description_title {
  color: black;
  font-family: arial;
  font-size: 12px;
  font-weight: bold;
}

.h1_description_menu {
  color: red;
  font-family: impact;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 5px;
  word-spacing: 8px;
}

.h2_description_menu {
  margin-bottom: 0px;
  color: black;
  font-family: impact;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 1px;
  word-spacing: 1px;
}

.h4_description_menu {
  margin: 0px;
  margin-top: 15px;
  margin-bottom: 15px;
  color: red;
  font-family: impact;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  letter-spacing: 3px;
  word-spacing: 1px;
}

.grid {
  display: grid;
  height: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
}

.item1 {
  padding-left: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 / 1;
}

.producto1 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto1.png");
  background-repeat: no-repeat;
  background-position: center;
}

.item2 {
  padding-left: 60px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 2 / 2;
}

.producto2 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto2.png");
  background-repeat: no-repeat;
  background-position: center;
}

.item3 {
  padding-left: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 3/ 3;
}

.producto3 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto3.png");
  background-repeat: no-repeat;
  background-position: center;
}

.item4 {
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 4/4;
}

.producto4 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto4.png");
  background-repeat: no-repeat;
  background-position: center;
}

.grid2 {
  display: grid;
  height: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  margin-top: 100px;
}

.item5 {
  padding-left: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 1 / 1;
}

.producto5 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto5.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.item6 {
  padding-left: 60px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 2 / 2;
}

.producto6 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto6.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.item7 {
  padding-left: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 3/ 3;
}

.producto7 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto7.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.item8 {
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  justify-content: space-around;
  align-items: center;
  grid-column: 4/4;
}

.producto8 {
  height: 150px;
  width: 100%;
  background-image: url("../assets/producto8.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>