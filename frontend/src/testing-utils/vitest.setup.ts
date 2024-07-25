import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
      // clean up after tests
    cleanup();
  });
