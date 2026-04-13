import React, { useEffect, useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
import Router from "./router/Router";
import { useAuth, useUser } from "@clerk/react";
import { Loader2 } from "lucide-react";

const ClerkEventListener = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const prevSignedIn = useRef(null);

  useEffect(() => {

    // 1. First render — just record the current state, do nothing
    if (prevSignedIn.current === null) {
      prevSignedIn.current = isSignedIn;
      return;
    }

    // 2. Was signed out, now signed in → LOGIN
    if (isSignedIn && !prevSignedIn.current) {
      const name = user?.fullName || user?.firstName || "User";
      toast.success(`Welcome back, ${name}!`);
    }

    // 3. Was signed in, now signed out → LOGOUT
    if (!isSignedIn && prevSignedIn.current) {
      toast.success("You have been logged out. See you soon!");
    }

    // 4. Update the ref for next time
    prevSignedIn.current = isSignedIn;

  }, [isSignedIn, user]);

  return null;
};

const App = () => {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-purple-500" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-center" />
      <ClerkEventListener />
      <Router />
    </div>
  );
};

export default App;
