import User from "./src/Models/users";
import Group from "./src/Models/groups";
import Cohorte from "./src/Models/cohorte";

export default async function Insert() {
    const users = [{
        _id: "600b9852935003272c8b6100",
        name: {firstname: "Admin", lastname: "Admin"},
        role: "admin",
        email: "admin@soyadmin.com",
        password: "D3ltaG@mma",
        github: "admin",
        created: Date() 
    },
    {
        _id: "600b9852935003272c8b6101",
        name: {firstname: "Alan", lastname: "Casella"},
        role: "alumno",
        email: "alan@gmail.com",
        password: "NoMerobenp1z",
        github: "AlanCasella",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6801"
    },
    {
        _id: "600b9852935003272c8b6102",
        name: {firstname: "Marcelo", lastname: "Spagnuolo"},
        role: "alumno",
        email: "marce@gmail.com",
        password: "Soy4nacontraseña",
        github: "MarceloSpagnuolo",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6801"
    },
    {
        _id: "600b9852935003272c8b6103",
        name: {firstname: "Eliezer", lastname: "Babi"},
        role: "alumno",
        email: "Eli@gmail.com",
        password: "Vaca4444",
        github: "EliezerBabi",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6801"
    },
    {
        _id: "600b9852935003272c8b6104",
        name: {firstname: "Chano", lastname: "Nieto"},
        role: "alumno",
        email: "chano@gmail.com",
        password: "Culiao123",
        github: "ChanoNieto",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6801"
    },
    {
        _id: "600b9852935003272c8b6105",
        name: {firstname: "David", lastname: "Nose"},
        role: "alumno",
        email: "david@gmail.com",
        password: "Soycallado123",
        github: "DavidNose",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6801"
    },
    {
        _id: "600b9852935003272c8b6106",
        name: {firstname: "Eduardo", lastname: "Cortez"},
        role: "alumno",
        email: "edu@gmail.com",
        password: "Trabajomuydur0",
        github: "EduardoCortez",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6802"
    },
    {
        _id: "600b9852935003272c8b6107",
        name: {firstname: "Carla", lastname: "Ramirez"},
        role: "alumno",
        email: "carla@gmail.com",
        password: "Yafueusarcontraseña",
        github: "CarlaRamirez",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6802"
    },
    {
        _id: "600b9852935003272c8b6108",
        name: {firstname: "Andres", lastname: "Garay"},
        role: "alumno",
        email: "andres@gmail.com",
        password: "bastaplz1234",
        github: "AndresGaray",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6802"
    },
    {
        _id: "600b9852935003272c8b6109",
        name: {firstname: "Carlos", lastname: "Castro"},
        role: "alumno",
        email: "carlos@gmail.com",
        password: "nosequeponer1234",
        github: "CarlosCastro",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6802"
    },
    {
        _id: "600b9852935003272c8b6110",
        name: {firstname: "Rodrigo", lastname: "Vellido"},
        role: "alumno",
        email: "rodrigo@gmail.com",
        password: "mandalelaRep3",
        github: "RodrigoVellido",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
        standup: "600b9852935003272c8b6802"
    },
    {
        _id: "600b9852935003272c8b6111",
        name: {firstname: "Martina", lastname: "Scomazzon"},
        role: "admin",
        email: "martinan@gmail.com",
        password: "SoyunaTL123",
        github: "MartinaScomazzon",
        created: Date(),
    },
    {
        _id: "600b9852935003272c8b6112",
        name: {firstname: "Jorge", lastname: "Malo"},
        role: "PM",
        email: "jorgebueno@gmail.com",
        password: "SoyunPM123",
        github: "JorgeMalo",
        created: Date(),
        standup: "600b9852935003272c8b6802",
        cohorte: "600b9852935003272c8b6901",
    },
    {
        _id: "600b9852935003272c8b6113",
        name: {firstname: "Miguel", lastname: "Hernandez"},
        role: "PM",
        email: "miguel@gmail.com",
        password: "SoyotrindePM23",
        github: "MiguelHernandez",
        created: Date(),
        standup: "600b9852935003272c8b6802",
        cohorte: "600b9852935003272c8b6901",
    },
    {
        _id: "600b9852935003272c8b6114",
        name: {firstname: "Agus", lastname: "Mineto"},
        role: "PM",
        email: "mineto@gmail.com",
        password: "Cansadodepass1234",
        github: "AgusMineto",
        created: Date(),
        standup: "600b9852935003272c8b6801",
        cohorte: "600b9852935003272c8b6901",
    },
    {
        _id: "600b9852935003272c8b6115",
        name: {firstname: "Tony", lastname: "Tralice"},
        role: "PM",
        email: "tony@gmail.com",
        github: "TonyTralice",
        created: Date(),
        password: "contraseñasDuras123",
        standup: "600b9852935003272c8b6801",        
        cohorte: "600b9852935003272c8b6901",
    },
    {
        _id: "600b9852935003272c8b6116",
        name: {firstname: "Diego", lastname: "Rodriguez"},
        role: "instructor",
        email: "diego@gmail.com",
        password: "Uruguayo123",
        github: "DiegoRodrigez",
        created: Date(),
        cohorte: "600b9852935003272c8b6902",
    },
    {
        _id: "600b9852935003272c8b6117",
        name: {firstname: "Agustin", lastname: "Amani"},
        role: "instructor",
        email: "Amani@gmail.com",
        github: "AgustinAmani",
        created: Date(),
        password: "SoyunInstructor123",
        cohorte: "600b9852935003272c8b6903",
    },
    {
        _id: "600b9852935003272c8b6118",
        name: {firstname: "Wanda", lastname: "Cirone"},
        role: "alumno",
        email: "Wanda@gmail.com",
        github: "WandaCirone",
        created: Date(),
        password: "SoyWandaFT04",
    },
    {
        _id: "600b9852935003272c8b6119",
        name: {firstname: "Tomas", lastname: "Deane"},
        role: "alumno",
        email: "Tomasito@gmail.com",
        github: "TomasDeane22",
        created: Date(),
        password: "JobPreparations",
    },
    {
        _id: "600b9852935003272c8b6120",
        name: {firstname: "Luz", lastname: "Borchardt"},
        role: "alumno",
        email: "Luz@gmail.com",
        github: "LuzBorchardt",
        created: Date(),
        password: "SoyCoFounder1",
    },
    {
        _id: "600b9852935003272c8b6121",
        name: {firstname: "Martin", lastname: "Borchardt"},
        role: "alumno",
        email: "Martincito@gmail.com",
        github: "MartinBorchardt",
        created: Date(),
        password: "SoyELFounder22",
    },
]
const groups = [
    {
    _id: "600b9852935003272c8b6802",
    PM: [{User: "600b9852935003272c8b6112"}, {User: "600b9852935003272c8b6113"}],
    Grupo: 1,
    Cohorte: "600b9852935003272c8b6801"
},
    {
    _id: "600b9852935003272c8b6801",
    PM: [{User: "600b9852935003272c8b6114"}, {User: "600b9852935003272c8b6115"}],
    Grupo: 2,
    Cohorte: "600b9852935003272c8b6801"
}
]

  const cohortes = [
    {
      _id: "600b9852935003272c8b6901",
      Nombre: "Webft01",
      Start: "8/02/2020",
      Alumnos: 4,
      Instructor: { User: "600b9852935003272c8b6116" },
      Created: "10/01/2020",      
      Active: false
    },
    {
      _id: "600b9852935003272c8b6902",
      Nombre: "Webft02",
      Start: "1/10/2020",
      Alumnos: 10,
      Instructor: { User: "600b9852935003272c8b6117" },
      Created: "7/09/2020",
    },
    {
      _id: "600b9852935003272c8b6903",
      Nombre: "Webft03",
      Start: "1/03/2021",
      Alumnos: 0,
      Instructor: { User: "600b9852935003272c8b6117" },
      Created: "5/01/2021",
    },
  ];

  users.forEach(async (c) => {
    await User.create(c);
  });
  groups.forEach(async (c) => {
    await Group.create(c);
  });
  cohortes.forEach(async (c) => {
    await Cohorte.create(c);
  });
  console.log("Insert completo");
}

