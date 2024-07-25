import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import AddMetricsModal from "./AddMetricsModal";
import MockProvider from "@/src/testing-utils/MockProvider";
import userEvent from "@testing-library/user-event";

describe("AddMetricsModal", () => {
  // Clean up after tests
  afterEach(() => {
    cleanup();
  });

  it("renders correctly when open", () => {
    render(
      <MockProvider>
        <AddMetricsModal open={true} />
      </MockProvider>
    );

    expect(screen.getByText("Add a New Metric")).toBeTruthy();
    expect(screen.getByLabelText("Name")).toBeTruthy();
    expect(screen.getByLabelText("Value")).toBeTruthy();
  });

  it("Close modal when cancel button is clicked", async () => {
    const handleClose = vi.fn();
    render(
      <MockProvider>
        <AddMetricsModal open={true} handleClose={handleClose} />
      </MockProvider>
    );

    await userEvent.click(screen.getByText("Cancel"));

    expect(handleClose).toHaveBeenCalled();
  });
});
