//Questa variabile contiene un Array di oggetti
const teamMembers = [
//
  {
    name: "Riccardo Scamarcio",
    role: "Designer",
    email: "Scamarci1979@team.com",
    img: "img/male1.png"
  },
  {
    name: "Amy Adam",
    role: "Front-end Developer",
    email: "Amy_Adams@team.com",
    img: "img/female1.png"
  },
  {
    name: "Ragnar Lothbrok",
    role: "Back-end Developer",
    email: "Rag.Loth766@team.com",
    img: "img/male2.png"
  },
  {
    name: "Anne Hathaway",
    role: "SEO Specialist",
    email: "EvilGirl@team.com",
    img: "img/female2.png"
  },
  {
    name: "Timothée Chalamet",
    role: "SEO Specialist",
    email: "Timothee_Charmy@team.com",
    img: "img/male3.png"
  },
  {
    name: "Nico",
    role: "Analyst",
    email: "Pataganiuzzi@team.com",
    img: "img/female3.png"
  }
];

//Selezioniamo il contenitore dove andranno inserite le card 
const contenitoreCardTeam = document.getElementById("contenitoreCard");

//Creiamo una variabile che conterrà la Card di ogni membro del team
let cardTeam = "";

//Creiamo un ciclo forEach per fare pratica con il metodo
teamMembers.forEach(persona =>  {
    cardTeam += `
    <div class="card">
        <div class="immagineProfilo">
            <img src=${persona.img}>
        </div>

        <div class="testoCard">
            <h4>${persona.name}</h4>
            <div>${persona.role}</div>
            <div>${persona.email}</div>
        </div>
    </div>`
});

contenitoreCardTeam.innerHTML = cardTeam;