const request = require("supertest");
const app = require("./api");

test("GET /tasks returns all tasks", async () => {
  const response = await request(app).get("/tasks");
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2);
});

test("GET /tasks/:id returns a specific task", async () => {
  const id = 1;
  const response = await request(app).get(`/tasks/${id}`);
  expect(response.status).toBe(200);
  expect(response.body.id).toBe(id);
});

test("POST /tasks creates a new task", async () => {
  const taskP = { title: "Task 3", description: "Do something new" };
  const response = await request(app).post("/tasks").send(taskP);
  expect(response.status).toBe(201);
  expect(response.body.title).toBe(taskP.title);
  expect(response.body.description).toBe(taskP.description);
});

test("PUT /tasks/:id updates an existing task", async () => {
  const id = 1;
  const updatedTask = {
    title: "Task 3 updated",
    description: "Do something 3",
  };
  const response = await request(app).put(`/tasks/${id}`).send(updatedTask);
  expect(response.status).toBe(200);
  expect(response.body.id).toBe(id);
  expect(response.body.title).toBe(updatedTask.title);
  expect(response.body.description).toBe(updatedTask.description);
});

test("DELETE /tasks/:id deletes an existing task", async () => {
  const id = 2;
  const response = await request(app).delete("/tasks/" + id);
  expect(response.status).toBe(204);
});
