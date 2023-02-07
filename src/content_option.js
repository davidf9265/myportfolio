const logotext = "DAFO";
const meta = {
    title: "Ing. David Franco",
    description: "I’m David Franco... Electronic Engineer, Full stack developer!",
};

const introdata = {
    title: "I’m David Franco",
    animated: {
        first: "Electronic Designer",
        second: "Full stack developer",
        third: "Robotics, AI, IoT, Aerospace!",
    },
    description: "Enthusiast of technology, I love to learn new things and I'm always looking for new challenges (techie).",
    your_img_url: "https://images.unsplash.com/photo-1592659762303-90081d34b277?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
};

const dataabout = {
    title: "a bit about my self",
    aboutme: "Analytical thinking is one of my strengths. Always trying to ﬁnd simplest possible solutions for complex problems. Very passionate about my degree, aerospace engineering and working with communities.",
};
const worktimeline = [{
        jobtitle: "NodeJs Backend Developer",
        where: "Carvajal Tecnología y Servicios",
        date: "2022",
    }
];

const skills = [{
        name: "Javascript + Typescript",
        value: 80,
    },
    {
        name: "NodeJs + ExpressJs (Backend)",
        value: 85,
    },
    {
        name: "SQL (Postgres, MariDB, MySQL)",
        value: 80,
    },
    {
        name: "ReactJs",
        value: 60,
    },
    {
        name: "Android (Kotlin)",
        value: 45,
    },
];

const services = [
    {
        title: "Mobile Apps",
        description: "Need to get your mobile app done? I can help you with that. I have experience in Android development and React Native cross platform (Android and iOS).",
    },
    {
        title: "Web platforms, static pages, markets and more!",
        description: "Don't worry about it, if it needs to go online I can make it for you."
    },
    {
        title: "IoT",
        description: "Feeling a bit like a maker? I have experience in IoT development, I can help you build your mvp or prototype."
    },
    {
        title: "Hardware",
        description: "Wow! seems like you are looking for something very specific and new. I love challenges and I have what it takes to face them."
    },
    {
        title: "Mentorship",
        description: "So... you want to learn something? Let me give you a hand on coding or engineering stuff."
    }
];

const dataportfolio = [{
        img: "https://cdn.pixabay.com/photo/2020/05/10/06/26/coming-soon-5152487_1280.png",
        desctiption: "Please wait a bit, I'm working on my portfolio.",
        link: "#",
    }
];

export const certificates = [{
    img: "https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-backend-introduccion/diploma-backend-introduccion_ri5e02.png",
    name: "Introducción al desarrollo backend",
    description: null,
    language: "Spanish",
    emitter: "Platzi",
    end_date: new Date("2023-01-13T00:00:00"),
    base_filename: "diploma_backend_introduccion"
},
{
    img: "https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-bd/diploma-bd_jvvw3k.png",
    name: "Curso de fundamentos de bases de datos",
    description: null,
    language: "Spanish",
    emitter: "Platzi",
    end_date: new Date("2023-01-13T00:00:00"),
    base_filename: "diploma_bd"
},
{
    img: "https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-crea-sitios-sin-codigo/diploma-crea-sitios-sin-codigo_lkvql9.png",
    name: "Curso: Crear sitios no-code con notion y super",
    description: null,
    language: "Spanish",
    emitter: "Platzi",
    end_date: new Date("2022-09-12T00:00:00"),
    base_filename: "diploma-crea-sitios-sin-codigo"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-csharp/diploma-csharp_oyqbm0.png",
    name:"Curso básico de C#: Fundamentos, variables y operadores",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-09-12T00:00:00"),
    base_filename:"diploma-csharp",
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-diseno-interfaz/diploma-diseno-interfaz_njo1iq.png",
    name:"Curso de diseño de interfaces",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2023-01-05T00:00:00"),
    base_filename:"diploma-diseno-interfaz"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-django/diploma-django_kfc0kt.png",
    name:"Curso básico de Django",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-09-08T00:00:00"),
    base_filename:"diploma-django"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-flujo-c/diploma-flujo-c_rr7lm2.png",
    name:"Curso de control de flujo en C",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2023-01-10T00:00:00"),
    base_filename:"diploma-flujo-c"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-gestion/diploma-gestion_z6y9cf.png",
    name:"Curso de fundamentos de project management",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-11-05T00:00:00"),
    base_filename:"diploma-gestion"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-html-css/diploma-html-css_lomfu7.png",
    name:"Curso definitivo de html y css",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-10-17T00:00:00"),
    base_filename:"diploma-html-css"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-ingenieria/diploma-ingenieria_twxggk.png",
    name:"Curso de fundamentos de ingeniería de software",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-11-29T00:00:00"),
    base_filename:"diploma-ingenieria"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-kotlin/diploma-kotlin_fwfyet.png",
    name:"Curso de kotlin desde cero",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-12-20T00:00:00"),
    base_filename:"diploma-kotlin"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-lenguaje-c/diploma-lenguaje-c_csitys.png",
    name:"Curso de introducción a C",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2023-09-19T00:00:00"),
    base_filename:"diploma-lenguaje-c"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-mysql-mariadb/diploma-mysql-mariadb_hpzp5g.png",
    name:"Curso de MySQL y MariaDB",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-11-04T00:00:00"),
    base_filename:"diploma-mysql-mariadb"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737267/certs/diploma-pic/diploma-pic_rvomug.png",
    name:"Curso de programación de microcontroladores PIC con C",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2023-01-10T00:00:00"),
    base_filename:"diploma-pic"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-postgresql/diploma-postgresql_vlsjqn.png",
    name:"Curso de postgreSQL",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-11-02T00:00:00"),
    base_filename:"diploma-postgresql"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-python-basico/diploma-python-basico_mlfzan.png",
    name:"Curso básico de Python",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2022-09-12T00:00:00"),
    base_filename:"diploma-python-basico"
},
{
    img:"https://res.cloudinary.com/dorru0ago/image/upload/v1675737266/certs/diploma-react-practico/diploma-react-practico_kz6yyp.png",
    name:"Curso práctico de ReactJs",
    description:null,
    language:"Spanish",
    emitter:"Platzi",
    end_date: new Date("2023-01-13T00:00:00"),
    base_filename:"diploma-react-practico"}
]

const contactConfig = {
    YOUR_EMAIL: "davidfranco9265@gmail.com",
    YOUR_FONE: "+57 3206345448",
    description: "Text me! don't hesitate to contact me... I'm always open to new opportunities.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/davidf9265",
    facebook: "#",
    linkedin: "https://linkedin.com/in/david-franco-ospina",
    twitter: "#",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};