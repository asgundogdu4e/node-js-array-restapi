const { neticeGonder } = require('./../../ktb/netice');
let id = 5;
let todos = [
    { id: 1, task: "Kitap oku", description: "Listedeki kitapları oku.", completed: false },
    { id: 2, task: "Ders çalış", description: "Günün derslerini çalış.", completed: true },
    { id: 3, task: "Yemek yap.", description: "Yemek pişir.", completed: false },
    { id: 4, task: "Bulaşık yıka.", description: "Bulaşıkları yıka.", completed: true },
    { id: 5, task: "Temizlik yap.", description: "Evini ve üstünü-başını temiz tut.", completed: false },
];

const sortTodos = () => {
    todos.sort((a, b) => {
        if (a.task < b.task) { return -1; }
        if (a.task > b.task) { return 1; }
        return 0;
    });
};

const sendTodos = async (res, records) => {
    const netice = await neticeGonder(records, null, null);
    res.send(netice);
};

const getTodos = (req, res) => {
    sortTodos();
    sendTodos(res, todos);
};

const saveTodo = (req, res) => {
    const veriler = req.body;
    id++;
    const newTodo = { id, ...veriler, completed: false }
    todos.push(newTodo);
    sendTodos(res, newTodo);
};

const deleteTodo = (req, res) => {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id != id);
    sendTodos(res, {});
};

const updateTodo = (req, res) => {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id != id);
    const newTodo = { id, ...req.body }
    todos = todos.concat(newTodo);
    sendTodos(res, newTodo);
};

module.exports = {
    getTodos, saveTodo, deleteTodo, updateTodo
}