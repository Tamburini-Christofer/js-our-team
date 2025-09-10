//Questa variabile contiene un Array di oggetti
const teamMembers = [
//
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
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