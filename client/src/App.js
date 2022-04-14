import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { Toaster } from "react-hot-toast";
import AlertProvider from "./contexts/AlertsContext";
import UserProvider from "./contexts/UserContext";
import ModalProvider from "./contexts/ModalContext";

function App() {
  return (
    <UserProvider>
      <AlertProvider>
        <ModalProvider>
        <BrowserRouter>
          <Router />
          <Toaster />
        </BrowserRouter>
        </ModalProvider>
      </AlertProvider>
    </UserProvider>
  );
}
export default App;