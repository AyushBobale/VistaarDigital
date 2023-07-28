import "./App.css";

import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import ActiveCustomer from "./pages/ActiveCustomer/ActiveCustomer";
import DistinctProducts from "./pages/DistinctProducts/DistinctProducts";
import { Home } from "./pages/Home/Home";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { ROUTES } from "./config";
import Transactions from "./pages/Transactions/Transactions";
import { UserLayout } from "./pages/Layouts/User/UserLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.ROOT} element={<UserLayout />}>
          <Route path={ROUTES.ROOT} element={<Home />} />
          <Route path={ROUTES.ACTIVE} element={<ActiveCustomer />} />
          <Route
            path={ROUTES.ACCOUNT_TRANSACTIONS(":account_id")}
            element={<Transactions />}
          />
          <Route path={ROUTES.ACCOUNT_TRANS_BELOW_5000} element={<Home />} />
          <Route
            path={ROUTES.DISTINCT_PRODUCTS}
            element={<DistinctProducts />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
