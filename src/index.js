import {GetUsers} from "./servicios/getUsers"


resolverPromesa()

async function resolverPromesa() {
    
    let infoUsers = await GetUsers()

    console.log(infoUsers);
    
}

const horas = document.getElementById("horas")

setInterval(() => {
    horas.innerHTML = "Hora cada segundo"
}, 3000);

