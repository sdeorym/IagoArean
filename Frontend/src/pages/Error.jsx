import { useRouteError } from "react-router-dom"
import error404 from "@assets/error404.webp";

function Error() {
  const error = useRouteError()
  console.error("ERROR CAPTURADO:", error)

  return (
    <div className="erreur">
      <div>
        <img src={error404} alt="Image inspired on myth from Popol-Vuh"></img>
      </div>
      <div className="textErreur">
        <h2>Oops! Page not found</h2>
        <p>Please, go back or click a different page on the menu.</p>
      </div>
    </div>
  )
}

export default Error