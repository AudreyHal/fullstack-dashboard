import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dashboard from "./page";
import MockProvider from "@/src/testing-utils/MockProvider";

describe("Dashboard", () => {
  it("renders the Dashboard correctly", () => {
    render(
      <MockProvider>
        <Dashboard />
      </MockProvider>
    );

    // check if the button to add metrics is present
    expect(screen.getByRole("button", { name: "Add Metrics" })).toBeTruthy();

    // check if cards to display average is present
    expect(screen.getByText("Latest per minute average")).toBeTruthy();
    expect(screen.getByText("Latest hourly average")).toBeTruthy();
    expect(screen.getByText("Latest daily average")).toBeTruthy();
    // check if "Activity Timeline" text is rendered correctly
    expect(screen.getByText("Activity Timeline")).toBeTruthy();
  });
});
