import App from "../app/App"
import ErrorPage from "../errorpage/ErrorPage"

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    }
]


export default routes