import { BrowserRouter, Route, Routes } from "react-router-dom";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import Authentication from "./authentication/Authentication";
import Dashboard from "./dashboard/Dashboard";

import withAuthProtection from "./authentication/ProtectedRoute";

const App = () => {
  const ProtectedDashboard = withAuthProtection(Dashboard);
  const query = new QueryClient();

  return (
    <QueryClientProvider client={query}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/dashboard/*" element={<ProtectedDashboard />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
