import "styles/index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HowToIntallReactHookForm from "features/how-to-install";
import Sidebar from "components/Sidebar";
import NotFound from "components/NotFound";
import Example from "features/example";

function App() {
  return (
    <div className="app">
      <div className="react-hook-form-train grid grid-cols-12 gap-2">
        <BrowserRouter>
          {/* side bar */}
          <Sidebar />

          {/* content area */}
          <div className="content-area col-span-11">
            <Switch>
              <Route exact path="/how-to-install" component={HowToIntallReactHookForm} />
              <Route exact path="/example" component={Example} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
        {/* <h1 className="font-body-bold text-xl text-center text-primary">Hello from react hook form</h1> */}
      </div>
    </div>
  );
}
export default App;
