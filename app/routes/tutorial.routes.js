const tutorialRoutes = (app) => {
    const tutorials = require("../controllers/tutorial.controller");
    var router = require("express").Router();
    router.get("/", tutorials.getTutorials);
    router.post("/", tutorials.saveTutorial);
    router.put("/:id", tutorials.updateTutorial);
    router.delete("/:id", tutorials.deleteTutorial);
    app.use("/api/tutorials", router);
};

module.exports = { tutorialRoutes };