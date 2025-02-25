
import Card from './card.jsx'
import Button from './Button.jsx'
import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'  
import List from './List.jsx' 
import Button1 from './Button1.jsx'

function App() {
  
  const fruits = [
    { id: 1, name: 'apple', calories: 100 },
    { id: 2, name: 'banana', calories: 200 },
    { id: 3, name: 'mango', calories: 30 },
    { id: 4, name: 'orange', calories: 40 },
    { id: 5, name: 'grapes', calories: 500 },
  ];
  const vegetables=[
    {id : 6, name: 'carrot', calories: 50},
    {id : 7, name: 'tomato', calories: 20},
    {id : 8, name: 'potato', calories: 150},
    {id : 9, name: 'onion', calories: 10},
    {id : 10, name: 'cucumber', calories: 30},
  ]
  return(
    <>
    <h2>Click event</h2>
    <Button1/>


    {fruits.length>0 &&<List items={fruits} category="Fruits"/>}
    {vegetables.length>0 &&<List items={vegetables} category="Vegetables"/>}


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
