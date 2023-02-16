import React from 'react'
import NewChat from './NewChat'

function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen'>
        <div className='flex-1'>
          
                {/* new chat */}
                <NewChat/>
                <div>
                    {/* model selection */}
                    
                </div>
                {/* map through the chat rows */}

            
        </div>
        
    </div>
  )
}

export default Sidebar