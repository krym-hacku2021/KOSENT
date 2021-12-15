/** @format */

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase_client";

export default function useUser() {
  const [session, setSession] = useState();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  function signOut() {
    supabase.auth.signOut();
  }

  function signInWithGithub() {
    supabase.auth.signIn({ provider: "github" });
  }

  function signInWithDiscord() {
    supabase.auth.signIn({ provider: "discord" });
  }

  function signInWithSlack() {
    supabase.auth.signIn({ provider: "slack" });
  }

  return {
    session,
    signOut,
    signInWithGithub,
    signInWithDiscord,
    signInWithSlack,
  };
}
