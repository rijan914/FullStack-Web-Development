
import Card from './card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'  
import List from './List.jsx' 


function App() {
 
  return(
    <>
    <List/>

    <UserGreeting isLoggedIn={true} username="BroCode"/>


    
    <Student name="SpiderMan" age={30} isStudent={true} />
    <Student name="Batman " age={32} isStudent={false} />
    <Student name="Ironman " age={2} isStudent={true} />
    <Student></Student>

    <Card/>
    <Card/>
    <Button/>
    </>
  )
}

export default App;
