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

const sendTodos = (res) => {
    sortTodos();
    res.send(todos);
};

const getTodos = (req, res) => {
    sendTodos(res);
};

const saveTodo = (req, res) => {
    const veriler = req.body;
    id++;
    todos.push({ id, ...veriler, completed: false });
    sendTodos(res);
};

const deleteTodo = (req, res) => {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id != id);
    sendTodos(res);
};

const updateTodo = (req, res) => {
    const id = req.params.id;
    todos = todos.filter((todo) => todo.id != id);
    todos = todos.concat({id, ...req.body });
    sendTodos(res);
};

module.exports = {
    getTodos, saveTodo, deleteTodo, updateTodo
}