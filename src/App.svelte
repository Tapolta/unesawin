<script>
  import Router from "svelte-spa-router";
  import LandingPage from "./routes/LandingPage.svelte";
  import Login from "./routes/Login.svelte";
  import Signup from "./routes/Signup.svelte";
  import Dashboard from "./routes/Dashboard.svelte";
  import History from "./routes/History.svelte";
  import Record from "./routes/Record.svelte";
  import RecordCheck from "./routes/RecordCheck.svelte";

  const routes = {
    '/': LandingPage,
    '/login': Login,
    '/sign-up': Signup,
    '/dashboard': Dashboard,
    '/history': History,
    '/record': Record,
    '/record-check/:id': RecordCheck
  };
</script>

<main class="bg-two w-screen overflow-x-none max-w-full">
  <Router {routes} />
</main>