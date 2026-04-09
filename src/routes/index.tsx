import { createFileRoute } from "@tanstack/react-router";
import Navigation from "../shared/navigation/Navigation.tsx";
import LoginPage from "../features/login/Login.tsx";


function IndexPage() {
  return(
    <>
    <Navigation/>
    <LoginPage></LoginPage>
    </>
  )
}

export const Route = createFileRoute("/")({
  component: IndexPage,
})