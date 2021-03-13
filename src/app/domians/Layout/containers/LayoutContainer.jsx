import { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../../../router/routes";

import Header from "../../Layout/components/header/Header";
// import { NotFoundPage } from "../../../pages/";

const cls = {
  layout:
    "flex h-screen bg-light-mode-content-bg dark:bg-dark-mode-content-bg text-gray-500 dark:text-gray-200",
  mainWrapper: "flex flex-col flex-1 w-full",
};

const LayoutContainer = () => {
  useEffect(() => {
    if (!localStorage.twTheme) return;
    document.querySelector("html").classList.add(localStorage.twTheme);
  }, []);

  return (
    <div className={cls.layout}>
      <div className={cls.mainWrapper}>
        <Header />

        {/* <Content> */}
        <Switch>
          {routes.map((route) =>
            route.component ? (
              <Route
                key={route.path}
                exact={true}
                path={`${route.path}`}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                render={(props) => <route.component {...props} />}
              />
            ) : null
          )}
          <Redirect exact from="/" to="/home" />

          {/* <Route component={NotFoundPage} /> */}
        </Switch>
        {/* </Content> */}
      </div>
    </div>
  );
};

export default LayoutContainer;
