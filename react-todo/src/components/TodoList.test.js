// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "./TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo List")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New Todo" },
    });
    fireEvent.click(screen.getByText("Add Todo"));
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

<<<<<<< Tabnine <<<<<<<
import { expect } from "@jest/globals";//+
//+
// ...//+
test("deletes a todo", () => {
    render(<TodoList />);//-
    const todo = screen.getByText("Learn React");//-
    fireEvent.click(screen.getAllByText("Delete")[0]);//-
    expect(todo).not.toBeInTheDocument();//-
  });//-
  render(<TodoList />);//+
  const todo = screen.getByText("Learn React");//+
  fireEvent.click(screen.getAllByText("Delete")[0]);//+
  expect(todo).not.toBeInTheDocument();//+
});//+
>>>>>>> Tabnine >>>>>>>
});
