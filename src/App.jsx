import { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import Router from "./router/Router";
import { useAuth, useUser } from "@clerk/react";
import { Loader2 } from "lucide-react";

const ClerkEventListener = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();


  useEffect(() => {
    if (isSignedIn === undefined) return;

    const wasSignedIn = sessionStorage.getItem("wasSignedIn");

    if (isSignedIn && wasSignedIn !== "true") {
      // Just logged in
      const name = user?.fullName || user?.firstName || "User";
      toast.success(`Welcome back, ${name}!`);
      sessionStorage.setItem("wasSignedIn", "true");
    }

    if (!isSignedIn && wasSignedIn === "true") {
      // Just logged out
      toast.success("You have been logged out. See you soon!");
      sessionStorage.setItem("wasSignedIn", "false");
    }
    
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
