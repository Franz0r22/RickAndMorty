import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="text-center">
      <h1>Oops!</h1>
      <p>Lo sentimos, la ruta a la que intentas acceder no existe.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}