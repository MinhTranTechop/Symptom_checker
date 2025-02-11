import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useBearStore } from "./store/app";
const Layout = () => {
  const { dataSelect, increasePopulation } = useBearStore();
  const id = location.pathname.split("/")[1];

  useEffect(() => {
    if (id === "skin" || id === "m") {
      increasePopulation({ condition: id });
    }
  }, []);
  console.log(dataSelect);

  return (
    <>
      <h1>Symptom checker</h1>
      <Suspense fallback={<p></p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
