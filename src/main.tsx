import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "@/providers/provider";
import "@/styles/globals.css";
import IndexPage from "@/pages/index";
import LoginPage from "@/pages/login";
import RegisterPage from "@/pages/register";
import ProfilePage from "@/pages/profile";
import ProfileSettingsPage from "@/pages/profile/settings";
import AuthGuard from "@/guard/auth.guard.tsx";
import AuthProvider from "@/providers/auth.provider";
import NotFoundPage from "@/pages/notfound";
import FaqPage from "@/pages/faq";
import ProfileApplicationsPage from "@/pages/profile/applications";
import ProfileCreateApplicationPage from "@/pages/profile/create.application";
import NewsPage from "@/pages/news";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Test from "./pages/test";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route element={<AuthGuard />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/profile/applications"
                element={<ProfileApplicationsPage />}
              />
              <Route
                path="/profile/create/application"
                element={<ProfileCreateApplicationPage />}
              />
              <Route
                path="/profile/settings"
                element={<ProfileSettingsPage />}
              />
            </Route>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </QueryClientProvider>
    </Provider>
  </BrowserRouter>,
);
