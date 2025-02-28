import LoggerComponent from "./LoggerComponent" 
import TimerComponent from "./TimerComponent"
import DataFetcher from "./DataFetcher"
import ResizeComponent from './ResizeComponent'
function App() {
 
  return(
    <>
    <ResizeComponent/>
    <DataFetcher/>
    <LoggerComponent/>

    <TimerComponent/>
    </>
  )
}

export default App
