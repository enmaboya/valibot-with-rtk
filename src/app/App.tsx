import { useSomeItems } from "../entities/Pokemon/hooks"

function App() {
    const { data } = useSomeItems()

    return (
        <span>{JSON.stringify(data?.results)} </span>
    )
}

export default App
