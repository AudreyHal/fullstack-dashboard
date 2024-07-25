import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import SummaryCard from "./SummaryCard";
import MockProvider from "@/src/testing-utils/MockProvider";

describe("SummaryCard", () => {
  it("renders the card with default value when no value is provided", () => {
    render(
      <MockProvider>
        <SummaryCard text="Latest Daily Average" />
      </MockProvider>
    );

    expect(screen.getByText("0")).toBeTruthy();
    expect(screen.getByText("Latest Daily Average")).toBeTruthy();
  });
});
