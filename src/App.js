import Router from "./navigations/Router";
import AuthProvider from "./context/AuthContext";



function App() {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
}

export default App;
