import { createContext, useState } from "react";
import ChildA from "./components/ChildA";

// Step 1: Create context
const UserContext = createContext();

// Step 2: Wrap all children inside a provider
function App() {
    const [user, setUser] = useState({ name: "love" });

    // Step 3: Pass value
    return (
        <UserContext.Provider value={user}>
            <ChildA />
        </UserContext.Provider>
    );
}

export default App;
export { UserContext };