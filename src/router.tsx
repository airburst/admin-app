import { createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Prevent layout flash during route transitions
    defaultPendingMs: 0,
    defaultPendingMinMs: 0,
    // Use View Transitions API for smoother navigation
    defaultViewTransition: true,
  });

  return router;
};
