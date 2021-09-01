const { neticeGonder } = require("./../../ktb/netice");
let id = 5;
let tutorials = [
  {
    id: 1,
    title: "Temelden Vue Kursu",
    description: "Vue ile kodlamayı öğrenin.",
    published: false,
  },
  {
    id: 2,
    title: "Vuex",
    description:
      "Learn How to manage the state of your vue js app with using Vuex.",
    published: true,
  },
  {
    id: 3,
    title: "React",
    description: "React'ın derinliklerine inin.",
    published: false,
  },
  {
    id: 4,
    title: "Redux",
    description:
      "It lets your React components read data from a Redux store, and dispatch actions to the store to update state.",
    published: true,
  },
  {
    id: 5,
    title: "Temel Dini Bilgiler",
    description: "Temel itikadi ve fıkıh bilgilerini öğrenin.",
    published: false,
  },
];

const sortTutorials = () => {
  tutorials.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
};

const sendTutorials = async (res, records) => {
  const netice = await neticeGonder(records, null, null);
  setTimeout(() => {
    res.send(netice);
  }, 1000);
};

const getTutorials = (req, res) => {
  sortTutorials();
  sendTutorials(res, tutorials);
};

const saveTutorial = (req, res) => {
  const veriler = req.body;
  id++;
  const newTutorial = { ...veriler, completed: false, id };
  tutorials.push(newTutorial);
  sendTutorials(res, newTutorial);
};

const deleteTutorial = (req, res) => {
  const id = req.params.id;
  tutorials = tutorials.filter((tutorial) => tutorial.id != id);
  sendTutorials(res, {});
};

const updateTutorial = (req, res) => {
  const id = req.params.id;
  tutorials = tutorials.filter((tutorial) => tutorial.id != id);
  const newTutorial = { id, ...req.body };
  tutorials = tutorials.concat(newTutorial);
  sendTutorials(res, newTutorial);
};

const findTutorialsByTitle = (req, res) => {
  const title = req.params.title;
  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.title.includes(title)
  );
  sortTutorials();
  sendTutorials(res, filteredTutorials);
};

module.exports = {
  getTutorials,
  saveTutorial,
  deleteTutorial,
  updateTutorial,
  findTutorialsByTitle,
};
