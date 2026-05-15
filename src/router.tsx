import { Link, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 p-8 text-center">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="text-muted-foreground text-sm">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="text-primary text-sm underline-offset-4 hover:underline">
        Go home
      </Link>
    </div>
  );
}

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
    defaultNotFoundComponent: NotFound,
  });

  return router;
};
