import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* /:coinId 경로에 대한 라우트 설정 */}
        <Route path="/">
          <Coin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;


