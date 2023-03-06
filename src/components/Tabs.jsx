import React from 'react'
import { useState } from 'react'



const Tabs = () => {
  const messages = [
    {MessageNum: 1, Text: "This is Message 1"},
    {MessageNum: 2, Text: "This is Message 2"},
    {MessageNum: 3, Text: "This is Message 3"}
  ]

  const [content, setContent] = useState("")


  return (
    <div>
      <h1>Current Tab</h1>
      {messages.map((messageDictionary, idx) => {
        return (<button onClick={(e) => setContent(messages[idx].Text)}>{messages[idx].MessageNum}</button>
        )})
      }
      {content}
    </div>
  )
}

export default Tabs


