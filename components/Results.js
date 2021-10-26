import Thumbnile from "./Thumbnile";
import FlipMove from "react-flip-move";

export default function Results({results}) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 large-screen:flex flex-wrap justify-center">
            {results.map((result)=>(
                <Thumbnile key={result.id} result={result}/>
            ))}
        </FlipMove>
    )
}
