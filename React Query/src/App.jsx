import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Heroes from "./Components/Heroes";
import Home from "./Components/Home";
import RQHeroes from "./Components/RQHeroes";
import "./App.css";
import RQSuperHero from "./Components/RQSuperHero";
import ParellelQuery from "./Components/ParellelQuery";
import DaynamicParallel from "./Components/DynamicParallel";
import DependentQueries from "./Components/DependentQueries";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/rqheroes" element={<RQHeroes />} />
            <Route path="/rqsuperhero/:id" element={<RQSuperHero />} />
            <Route path="/parallel-query" element={<ParellelQuery />} />
            <Route
              path="/dynamic-parallel"
              element={<DaynamicParallel heroId={[1, 3]} />}
            />
            <Route
              path="/dependentHero"
              element={<DependentQueries email={"lenovo@example.com"} />}
            />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
