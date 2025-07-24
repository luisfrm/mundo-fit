"use client"

import { createSupabaseClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { GoogleIcon } from "../Icons/GoogleIcon";
import { DiscordIcon } from "../Icons/DiscordIcon";
import { GithubIcon, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  provider?: "google" | "discord" | "github";
}

const AuthButton = ({ provider }: AuthButtonProps) => {
  const supabase = createSupabaseClient();
  const [session, setSession] = useState<Session | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
    }
    getSession();
  }, [supabase]);

  const handleSignIn = async () => {
    if (!provider) {
      throw new Error("Provider is required");
    }

    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(error.message);
    }

    setSession(null);
    router.refresh();
  };

  if (session) {
    return (
      <Button variant="outline" className="w-full bg-transparent" onClick={handleSignOut}>
        <LogOut className="mr-2 h-4 w-4" />
        Cerrar Sesión
      </Button>
    )
  }

  if (!provider) {
    return (
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={handleSignOut}
      >
        <LogOut className="mr-2 h-4 w-4" />
        Cerrar Sesión
      </Button>
    )
  }

  return (
    <Button variant="outline" className="w-full bg-transparent" onClick={handleSignIn}>
      {provider === "google" ? <GoogleIcon /> : provider === "discord" ? <DiscordIcon /> : <GithubIcon className="mr-2 h-4 w-4" />}
      {provider === "google" ? "Google" : provider === "discord" ? "Discord" : "GitHub"}
    </Button>
  )
};

export default AuthButton;