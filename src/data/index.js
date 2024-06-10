import employee from '../img/employee-tracker.png';
import noSQL from '../img/noSQL.png';
import textEditor from '../img/text-editor.png';
import noteTaker from '../img/note-taker.png';

const data = {

  "portfolio": [
    {
      "id": 1,
      "src": "",
      "title": "This is a test",
      "description": "",
      "href": "",
      "live": "",
      "active": true
    },
    {
      "id": 2,
      "src": "",
      "title": "This is a test",
      "description": "",
      "href": "",
      "live": "",
      "active": true
    },
    {
      "id": 3,
      "src": noteTaker,
      "title": "Note Taker",
      "description": "Note taker is designed to help users write, save and delete notes. Built with an Express.js backend, it stores and retrieves note data from a JSON file, providing a simple yet effective way to keep track of tasks and thoughts.",
      "href": "https://github.com/Vinni99/note-taker",
      "live": "https://note-list-taker99-16e59949d8d0.herokuapp.com/",
      "tools": [
        "JavaScript",
        "HTML",
        "Node.js",
        "Express.js",
        "Heroku"
      ],
      "active": true
    },
    {
      "id": 4,
      "src": textEditor,
      "title": "J.A.T.E. | Text Editor",
      "description": "This project is a Progressive Web Application (PWA) text editor that enables users to create, save, and retrieve notes or code snippets with or without an internet connection. The application presents a straightforward interface with a text editor and a list of saved notes, ensuring reliable access to your notes anytime.",
      "href": "https://github.com/Vinni99/text-editor?tab=readme-ov-file",
      "live": "https://stark-retreat-70771.herokuapp.com/",
      "tools": [
        "JavaScript",
        "Node.js",
        "Babel",
        "Express.js",
        "IndexedDB",
        "Service Workers",
        "Webpack"
      ],
      "active": true
    },
    {
      "id": 5,
      "src": noSQL,
      "title": "Social Network API",
      "description": "Social Network API built with Express.js and MongoDB. This API allows users to share thoughts, react to friends' thoughts, and manage a friend list. It includes features such as creating, updating, and deleting users and thoughts, as well as managing reactions and friend lists through various API routes.",
      "href": "https://github.com/Vinni99/nosql",
      "live": "https://github.com/Vinni99/nosql",
      "tools": [
        "JavaScript",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Insomnia Program"
      ],
      "active": true
    },
    {
      "id": 6,
      "src": employee,
      "title": "Employee Tracker",
      "description": "Employee Tracker is a command-line application designed to help business owners manage their company's departments, roles and employees efficiently.",
      "href": "https://github.com/Vinni99/employee-tracker",
      "live": "https://github.com/Vinni99/employee-tracker",
      "tools": [
        "JavaScript",
       "Inquirer",
        "MySQL",
         "Node"
        ],
      "active": true
    }
  ]
}

export default data;