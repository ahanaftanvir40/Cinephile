import { useTitle } from "../hooks"


export const PageNotFound = ({ title }) => {
    const pageTitle = useTitle(title)
    return (
        <main>
            <div className={"text-7xl"}>
                PageNotFound
            </div>
        </main>
    )
}
