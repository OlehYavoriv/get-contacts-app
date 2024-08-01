import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import "./index.scss";
import { Routing } from "./routes";

const App = () => {
  return (
    <ErrorBoundary>
      <Routing />
    </ErrorBoundary>
  );
};

export default App;
