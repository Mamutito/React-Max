import React, { useEffect } from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import { getTokenDuration } from "../util/auth";

function RootLayout() {
  const token = useLoaderData();
  const submit = useSubmit();
  console.log("eltoken", token);

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
    const currentDuration = getTokenDuration();
    console.log(currentDuration);

    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, currentDuration);
  }, [token, submit]);
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
