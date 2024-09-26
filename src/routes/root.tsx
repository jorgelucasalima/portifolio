import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <a href="/">Inicio</a>
      <a href="/about">Ir para sobre</a>
      <h1>Home</h1>

      <div id="detail">
        <Outlet />
      </div>

    </div>
  )
}