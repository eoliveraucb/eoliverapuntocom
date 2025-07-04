import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import Portfolio from "@/pages/Portfolio";
import Resume from "@/pages/Resume";
import Projects from "@/pages/Projects";
import SelectedWorks from "@/pages/SelectedWorks";
import ProjectDetail from "./pages/ProjectDetail";
import { Visitors } from "./pages/Visitors";
import { UniqueVisitors } from "./pages/UniqueVisitors";
import { NewPage } from "./pages/NewPage";
import Editor from "./pages/Editor";
import { NotFoundPage } from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/selected-works" component={SelectedWorks} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/resume" component={Resume} />
      <Route path="/cv" component={Resume} />
      <Route path="/visitors" component={Visitors} />
      <Route path="/unique-visitors" component={UniqueVisitors} />
      <Route path="/uniquevisitors" component={UniqueVisitors} />
      <Route path="/new-page" component={NewPage} />
      <Route path="/editor" component={Editor} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <ScrollToTop />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
