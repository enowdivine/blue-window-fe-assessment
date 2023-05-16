import "./App.css";
import MainLayout from "./layouts/MainLayout";
import Index from "./pages";

/**
 * This is the application entry point
 */
function App() {
  return (
    <MainLayout>
      <Index />
    </MainLayout>
  );
}

export default App;
