import React from "react";
import { render, screen } from "@testing-library/react";

import Routes from "../Routes";

describe("Components / Routes", () => {
  it("renders correctly with empty routes", () => {
    render(<Routes routes={[]} />);

    expect(screen.getByText("No routes!")).toBeInTheDocument();
  });

  it("renders correctly with routes", () => {
    const routes = [
      { slug: "route-1", title: "Route 1" },
      { slug: "route-2", title: "Route 2" },
    ];
    render(<Routes routes={routes} />);

    expect(
      screen.getAllByRole("link", { href: "/route/route-1" })
    ).toHaveLength(2);
  });
});
