import { Outlet, createFileRoute } from "@tanstack/react-router";
import { HomeLayout } from "@/components/home/home-layout";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <HomeLayout>
      <Outlet />
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">Hello</div>
    </HomeLayout>
  );
}
