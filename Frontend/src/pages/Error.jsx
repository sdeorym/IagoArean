import { useRouteError } from "react-router-dom"
function Error() {
  const error = useRouteError()
  console.error("ERROR CAPTURADO:", error)

  return (
    <div>
      <h2>¡Ups! Ha ocurrido un error</h2>
      <pre>{JSON.stringify(error, null, 2)}</pre>
      <p>{error?.message}</p>
      <p>{error?.statusText}</p>
    </div>
  )
}

export default Error