import React from "react";
import GoodList from "./pages/GoodListPage/GoodList";
import { Router, Route, Link, Switch } from "wouter";
import NotFound from "./pages/NotFoundPage/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/">
        <main>
          <GoodList />
        </main>
      </Route>
      <Route path="/:id">
        <main>
          <h1>bruh</h1>
        </main>
      </Route>

      {/* Default Route (404) */}
      <Route>{(params) => <NotFound params={params} />}</Route>
    </Switch>
  );
}
