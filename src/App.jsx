import "./index.scss";
import { Routing } from "./routes";
import { Container } from "./components/Container";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <Container>
        <Routing />
      </Container>
    </ErrorBoundary>
  );
};

export default App;
