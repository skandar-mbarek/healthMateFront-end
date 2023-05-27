import Router from "./navigations/Router";
import AuthProvider from "./context/AuthContext";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider maxSnack={10}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
