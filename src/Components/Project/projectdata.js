import colorMeTwice from "../../img/color-me-twice.png";
import toDoApp from "../../img/todoApp.png";
import sunCard from "../../img/suncard.png";
import guessTheNumber from "../../img/guessTheNumber.png";

const projectData = [
  {
    // ------------- TODOAPP --------------------
    id: 0,
    name: "ToDo App",
    tag: ["React", "Tailwind", "POSTGRESQL"],
    img: toDoApp,
    website: "https://todo-group3-client.vercel.app/",
    github: "https://github.com/Hyper-Team-3/Todo-Group3.git",
  },
  {
    // ------------- COLORMETWICE --------------------
    id: 1,
    name: "Color me Twice",
    tag: ["React"],
    img: colorMeTwice,
    website: "https://color-me-twice.netlify.app/",
    github: " https://github.com/carmelapi/colorMeTwice.git",
  },
  {
    // ------------- SUN CARD GAME --------------------
    id: 2,
    name: "Sun Card",
    tag: ["Html", "Css", "JS"],
    img: sunCard,
    website: "https://sun-card-game.netlify.app/",
    github: "https://github.com/carmelapi/sun-card-game",
  },
  {
    // ------------- GUESS THE NUMBER --------------------
    id: 3,
    name: "Guess the Number",
    tag: ["Html", "Css", "JS"],
    img: guessTheNumber,
    website: "https://guesscarmelanumber.netlify.app/",
    github: "https://github.com/carmelapi/guessTheNumber",
  },
];

export default projectData;
