import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginFormProps {
  onLogin: () => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
    navigate({ to: "/dashboard" });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access the admin dashboard
        </p>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <Label htmlFor="userEmail" className="leading-5">
              Email address
            </Label>
            <Input
              type="email"
              id="userEmail"
              placeholder="Enter your email address"
              defaultValue="admin@example.com"
            />
          </div>

          <div className="w-full space-y-1">
            <Label htmlFor="password" className="leading-5">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={isVisible ? "text" : "password"}
                placeholder="••••••••••••••••"
                className="pr-9"
                defaultValue="simple-pass-1234"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => setIsVisible((prev) => !prev)}
                className="text-muted-foreground focus-visible:ring-ring/50 absolute inset-y-0 right-0 rounded-l-none hover:bg-transparent"
              >
                {isVisible ? <EyeOffIcon /> : <EyeIcon />}
                <span className="sr-only">
                  {isVisible ? "Hide password" : "Show password"}
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-y-2">
            <div className="flex items-center gap-3">
              <Checkbox id="rememberMe" className="size-5" />
              <Label htmlFor="rememberMe" className="text-muted-foreground">
                Remember me
              </Label>
            </div>
            <a href="#" className="text-sm hover:underline">
              Forgot password?
            </a>
          </div>

          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
