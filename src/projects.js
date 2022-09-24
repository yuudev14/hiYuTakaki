module.exports = {
  projects: [
    {
      name: "Pet Pals",
      mainPic: "petPals.png",
      imageFolder: require.context(
        "./assets/petPals",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description:
        "A full-stack progressive web app for connecting pet owners and pet lovers or carers.",
      github_url: "https://github.com/Peternals",
      app_url: "https://peternals-pet-pals.netlify.app/#/",
      stack: [
        "React",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "JWT",
        "Socket.io",
        "axios",
        "SASS",
      ],
      roles: [
        "Developed the chat feature of the app as well as the notification using Socket.io.",
        "Designing UI of the app which is compatible with both desktop and mobile view using SASS.",
        "Engineered a private route component in React for restricting users to access certain pages.",
      ],
    },
    {
      name: "UShop",
      mainPic: "UShop.png",
      imageFolder: require.context(
        "./assets/UShop",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description:
        "An e-commerce full-stack web application to buy and sell products.",
      github_url: "https://github.com/YuTakaki/UShop",
      app_url: "https://yu-ushop.herokuapp.com/#/",
      stack: [
        "React",
        "PostgreSQL",
        "Node.js",
        "Express.js",
        "Redux",
        "JWT",
        "pg",
        "SASS",
        "axios",
        "Cloudinary",
      ],
      roles: [
        "Developed overall architecture of the app using PERN (PostgreSQL, Express.js, React.js, Node.js) Stack.",
        "Build the responsive UI of the app using Sass.",
        "Engineered the authentication with the use of JSON Web Token.",
      ],
    },
    {
      name: "Memers",
      mainPic: "memers.png",
      imageFolder: require.context(
        "./assets/memers",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description: "A full-stack application for posting and viewing memes.",
      github_url: "https://github.com/YuTakaki/memers",
      app_url: "https://yu-memers.herokuapp.com/#/",
      stack: [
        "React",
        "PostgreSQL",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "JWT",
        "Knex",
        "SASS",
        "axios",
      ],
      roles: [
        "Developed the app from start to finish using PERN (PostgreSQL, Express.js, React.js, Node.js) Stack",
        "Designed the database tables and relationships with one another in PostgreSQL using Knex.",
      ],
    },
    {
      name: "Ask",
      mainPic: "ask.png",
      imageFolder: require.context("./assets/ask", true, /\.(png|jpe?g|svg)$/),
      description:
        "A full-stack social media platform for asking and answering questions",
      github_url: "https://github.com/YuTakaki/ask",
      app_url: "https://ask-yu.herokuapp.com/",
      stack: [
        "React",
        "PostgreSQL",
        "Node.js",
        "Express.js",
        "Redux",
        "JWT",
        "Socket.io",
        "SASS",
        "pg",
        "axios",
      ],
      roles: [
        "Developed the project using PERN Stack",
        "Engineered the Authentication of the app using JWT Auth",
      ],
    },
    {
      name: "mymizu-gocchi",
      mainPic: "mymizu-gocchi.png",
      imageFolder: require.context(
        "./assets/mymizu-gochii",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description: "A full-stack app for gamifying MyMizu API",
      github_url: "https://github.com/ShotaKarato/mymizu-app",
      app_url: "https://my-mizugocchi.herokuapp.com/",
      stack: [
        "React",
        "PostgreSQL",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "JWT",
        "axios",
        "Google Map API",
        "Geolocation API",
        "MyMizu API",
      ],
      roles: [
        "Developed filter option in displaying Mymizu's locations using Google Map API and geolocation API.",
        "Build the authentication feature of the app using JWT Auth.",
        "Engineered the private route component in React to restrict users from using the app when not logged in.",
      ],
    },
    {
      name: "Diary Android",
      mainPic: "diary.png",
      imageFolder: require.context(
        "./assets/diary",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description:
        "A full-stack android application to record your daily life.",
      github_url: "https://github.com/YuTakaki/diary-android",
      app_url: null,
      stack: ["Kotlin", "Android Studio", "Firebase"],
      roles: [
        "Setup authentication using Firebase Authentication.",
        "Developed the app using Kotlin, Android Studio, Firebase Authentication, Firestore.",
      ],
    },
  ],
  oldProjects: [
    {
      name: "MyChat",
      mainPic: "mychat.png",
      imageFolder: require.context(
        "./assets/myChat",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description:
        "A full-stack progressive web app for chatting with your friends",
      github_url: "https://github.com/YuTakaki/myChat",
      app_url: "https://mychat-yu.herokuapp.com/#/",
      stack: [
        "React",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Redux Toolkit",
        "Passport.js",
        "Socket.io",
        "SASS",
        "axios",
        "Cloudinary",
      ],
      roles: [
        "Engineered the chat functionality of the app  using Socket.io.",
        "Designing UI of the app compatible with both desktop and mobile view using SASS.",
        "Build the authentication feature using Passport.js",
      ],
    },
    {
      name: "tweetIt",
      mainPic: "tweetit.png",
      imageFolder: require.context(
        "./assets/tweetit",
        true,
        /\.(png|jpe?g|svg)$/
      ),
      description:
        "Developed a twitter clone that lets you post a tweet, view a tweet, comment in a tweet and also find friends to add to see their posts",
      github_url: "https://github.com/YuTakaki/tweetIt",
      app_url: "https://tweet-it-yu.herokuapp.com/#/",
      stack: [
        "React",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Passport.js",
        "SASS",
        "Cloudinary",
      ],
      roles: [
        "Developed the tweet post functionality of the app by uploading the pictures in Cloudinary and storing the post itself in MongoDB",
        "Designed overall design of the app that is compatible in mobile, desktop and tablet using SASS",
        "Engineered a private route component in React based on the user authenticatication with the use of Passport.js",
      ],
    },

    // {
    //   name: "Popcorn Time",
    //   mainPic: "popcorn.png",
    //   imageFolder: require.context(
    //     "./assets/petPals",
    //     true,
    //     /\.(png|jpe?g|svg)$/
    //   ),
    //   description:
    //     "A full-stack progressive web app for renting pets and for finding carers.",
    //   github_url: "https://github.com/Team-Freshly-Washed-Turtles",
    //   app_url: "https://stupefied-leakey-aa78c8.netlify.app/",
    //   stack: [
    //     "React",
    //     "MongoDB",
    //     "Node.js",
    //     "Express.js",
    //     "Redux Toolkit",
    //     "JWT",
    //     "Socket.io",
    //     "SASS",
    //   ],
    //   roles: [
    //     "Developed the chat feature of the app as well as the notification using Socket.io.",
    //     "Designing UI of the app which is compatible with both desktop and mobile view using SASS.",
    //     "Engineered a private route component in React for restricting users to access certain pages.",
    //   ],
    // },
  ],
};
