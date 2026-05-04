import { useRouteError } from "react-router";


const Error = () => {
    const errorDetail = useRouteError(); //This is a hook provided by react-router that is why always declare it inside functional component.
    console.log(errorDetail);

    return(
        <div>
            <h1>Oops Something went wrong!</h1>
            <h3>{errorDetail.status} - {errorDetail.statusText}</h3>
        </div>
    )
}

export default Error;