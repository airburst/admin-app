import { useEffect, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { LoginForm } from "@/components/login/login-form";
import { HomeLayout } from "@/components/home/home-layout";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [isChecking, setIsChecking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated") === "true";
    if (isAuthenticated) {
      navigate({ to: "/dashboard" });
    } else {
      setIsChecking(false);
    }
  }, [navigate]);

  const handleLogin = () => {
    localStorage.setItem("authenticated", "true");
  };

  if (isChecking) {
    return null;
  }

  return (
    <HomeLayout>
      <div className="flex min-h-[80vh] items-center justify-center">
        <LoginForm onLogin={handleLogin} />
      </div>
    </HomeLayout>
  );
}
