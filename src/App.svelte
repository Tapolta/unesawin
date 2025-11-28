<script>
  import Router from "svelte-spa-router";
  import LandingPage from "./routes/LandingPage.svelte";
  import Login from "./routes/Login.svelte";
  import Signup from "./routes/Signup.svelte";
  import History from "./routes/History.svelte";
  import Record from "./routes/Record.svelte";
  import RecordCheck from "./routes/RecordCheck.svelte";
  import HistoryDetailed from "./routes/HistoryDetailed.svelte";
  import HistoryEmpty from "./routes/HistoryEmpty.svelte";
  import DashboardV2 from "./routes/DashboardV2.svelte";

  const routes = {
    '/': LandingPage,
    '/login': Login,
    '/sign-up': Signup,
    '/dashboard': DashboardV2,
    '/history': History,
    '/history/not-found': HistoryEmpty,
    '/history/:id': HistoryDetailed,
    '/record': Record,
    '/record-check/:id': RecordCheck,
  };
</script>

<main class="bg-two w-screen overflow-x-none max-w-full">
  <Router {routes} />
</main>