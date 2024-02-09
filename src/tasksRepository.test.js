const tasksRepository = require("./tasksRepository");

describe("pruebas", () => {
  // prueba unitaria
  test("Get all tasks", () => {
    // Arrage
    let tasks = [];

    // Act
    tasks = tasksRepository.getAll();

    // Assert
    expect(tasks.length).toBe(2);
    expect(tasks.length == 2).toBe(true);
    expect(typeof task == "array");
  });

  test("Get one task by id", () => {
    // Arrage
    let tasks = {};

    // Act
    task = tasksRepository.getById(1);

    // Assert
    expect(task.title == "Task 1").toBe(true);
  });

  test("Create a task", () => {
    // Arrange
    const newTask = { id: 3, title: "Task 3", completed: false };
    // Act
    tasksRepository.createTask(newTask);
    const tasks = tasksRepository.getAll();
    // Assert
    expect(tasks.length).toBe(3);
    expect(tasks).toContainEqual(newTask);
  });

  test("Update a task", () => {
    let tasks = [];
    tasks = tasksRepository.getAll();

    const updatedTask = {
      title: "Updated Task",
      description: "Updated description",
    };

    tasksRepository.updateTask(1, updatedTask);
    expect(tasks[0].title).toBe("Updated Task");
    expect(tasks[0].description).toBe("Updated description");
  });

  test("Delete a task", () => {
    // Arrage
    let tasks = [];

    // Act
    tasks = tasksRepository.getAll();
    const task = 1;
    tasksRepository.deleteTask(task);

    expect(tasks.find((task) => task.id === task)).toBeUndefined();
  });
});
