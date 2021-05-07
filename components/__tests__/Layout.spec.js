import React from "react";
import { render, screen } from "@testing-library/react";

import Layout from "../Layout";

describe("Components / Layout", () => {
  beforeEach(() => {
    render(<Layout pageTitle="Biketastic">children elements</Layout>);
  });

  it("renders title correctly", () => {
    expect(screen.getByRole("link")).toHaveTextContent("Biketastic");
  });

  it("renders children correctly", () => {
    expect(screen.getByText("children elements")).toBeInTheDocument();
  });
});
