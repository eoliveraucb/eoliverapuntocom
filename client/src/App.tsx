import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import SelectedWorks from "@/pages/SelectedWorks";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/selected-works" component={SelectedWorks} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/resume" component={Resume} />
      <Route path="/cv" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;