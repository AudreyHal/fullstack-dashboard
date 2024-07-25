import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
      // Clean up after tests
    cleanup();
  });
