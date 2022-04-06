import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { Toaster } from "react-hot-toast";
import AlertProvider from "./contexts/AlertsContext";
import UserProvider from "./contexts/UserContext";

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <BrowserRouter>
          <Router />
          <Toaster />
        </BrowserRouter>
      </AlertProvider>
    </UserProvider>
  );
}
export default App;