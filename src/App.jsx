import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/NavBar.jsx";
import MailboxList from "./components/MailboxList";
import MailboxForm from "./components/MailboxForm.jsx";
import MailboxDetails from "./components/MailboxDetails.jsx";

const mailboxData = [
  {
    _id: 1,
    boxSize: 'Small', 
    boxholder: 'Alex'
  }, 
  {
    _id: 2,
    boxSize: 'Small', 
    boxholder: 'Sara'
  },
  {
    _id: 3,
    boxSize: 'Large', 
    boxholder: 'Michael'
  },
  {
    _id: 4,
    boxSize: 'Medium', 
    boxholder: 'Lola'
  },
  {
    _id: 5,
    boxSize: 'Large', 
    boxholder: 'Witt'
  }
]

const App = () => {
  const [mailboxes, setMailboxes] = useState(mailboxData)

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length +1
    setMailboxes([...mailboxes, newMailboxData])
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />}/>
        <Route path="/mailboxes/new" element={<MailboxForm mailboxes={mailboxes} addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  )
};

export default App;
