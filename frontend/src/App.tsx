import {AuthProvider} from "./contexts/AuthContext.tsx";
import {CssBaseline} from "@mui/material";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import Router from "./routes/Router.tsx";

function App() {

  return (
      <ThemeProvider>
          <CssBaseline/>
          <AuthProvider>
              <Router/>
          </AuthProvider>
      </ThemeProvider>
  )
}

export default App
