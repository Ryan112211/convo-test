import { render, fireEvent } from "@testing-library/react";

import Table from "./Table";
import { MovieContext } from "@/lib/store/context/movieContext";

jest.mock("@/hooks/useDebounce", () => jest.fn());

describe("Table", () => {
  const mockDispatch = jest.fn();

  const movies = [
    { id: 1, title: "Movie 1", upvotes: 2, date: new Date("2022-01-01") },
    { id: 2, title: "Movie 2", upvotes: 3, date: new Date("2022-01-02") },
    { id: 3, title: "Movie 3", upvotes: 1, date: new Date("2022-01-03") },
  ];

  const formData = { id: 1, title: "Hello", upvotes: 0, date: new Date() };

  it("renders without crashing", () => {
    render(
      <MovieContext.Provider
        value={{
          movies,
          dispatch: mockDispatch,
          setFormData: jest.fn(),
          formData,
        }}
      >
        <Table />
      </MovieContext.Provider>
    );
  });

  it("calls dispatch with correct payload when delete is clicked", () => {
    const { getByTestId } = render(
      <MovieContext.Provider
        value={{
          movies,
          dispatch: mockDispatch,
          setFormData: jest.fn(),
          formData,
        }}
      >
        <Table />
      </MovieContext.Provider>
    );

    const deleteButton = getByTestId("delete-1");
    fireEvent.click(deleteButton);
    const confirmButton = getByTestId("confirm-delete");
    fireEvent.click(confirmButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "DELETE_MOVIE",
      payload: 1,
    });
  });
});
