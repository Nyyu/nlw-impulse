// interface propType {
//     text?: String; // if ?: instead of : -> Optional
// }

// const Sample = ({ text = "Default" }: propType) => {
//     return (
//         <button className="bg-violet-500 p-2 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">
//             {text}
//         </button>
//     );
// };

// const Sample2 = ({ text }: propType) => {
//     return <button>{text ?? "Default2"}</button>;
// };

import Widget from "./Components/Widget";

function App() {
    return (
        <div className="flex gap-2">
            <Widget />
        </div>
    );
}

export default App;
