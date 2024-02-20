import { useTitle } from "../hooks"


export const PageNotFound = ({ title }) => {
    //eslint-disable-next-line
    const pageTitle = useTitle(title)
    return (
        <main>
            <div className={"text-7xl"}>
                PageNotFound
            </div>
        </main>
    )
}
