let id = 5;
let tutorials = [
    { id: 1, title: "Vue", description: "Vue öğren", published: false },
    { id: 2, title: "Vuex", description: "Vue ve Vuex'i beraber kodla", published: true },
    { id: 3, title: "React", description: "React", published: false },
    { id: 4, title: "Redux", description: "React ve Redux kullanmayı öğren", published: true },
    { id: 5, title: "Temel Dini Bilgiler", description: "Temel itikadi ve fıkıh bilgilerini öğren", published: false },
];

const sortTutorials = () => {
    tutorials.sort((a, b) => {
        if (a.title < b.title) { return -1; }
        if (a.title > b.title) { return 1; }
        return 0;
    });
};

const sendTutorials = (res) => {
    sortTutorials();
    res.send(tutorials);
};

const getTutorials = (req, res) => {
    sendTutorials(res);
};

const saveTutorial = (req, res) => {
    const veriler = req.body;
    id++;
    tutorials.push({ id, ...veriler, completed: false });
    sendTutorials(res);
};

const deleteTutorial = (req, res) => {
    const id = req.params.id;
    tutorials = tutorials.filter((tutorial) => tutorial.id != id);
    sendTutorials(res);
};

const updateTutorial = (req, res) => {
    const id = req.params.id;
    tutorials = tutorials.filter((tutorial) => tutorial.id != id);
    tutorials = tutorials.concat({ id, ...req.body });
    sendTutorials(res);
};

module.exports = {
    getTutorials, saveTutorial, deleteTutorial, updateTutorial
}