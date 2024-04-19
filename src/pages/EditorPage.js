import React, { useEffect, useRef } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import User from '../components/User';
import Editor from '../components/Editor';  
import toast from 'react-hot-toast';
import { initSocket } from '../socket';



const EditorPage = () => {

  // const socketRef = useRef(null);
  // useEffect(() => {
  //   const init = async() => {
  //     socketRef.current = await initSocket();

  //   }
  // }, [])

  const [users, setUsers] = useState([
    { socketID: 1, username: 'John Doe' },
    { socketID: 2, username: 'Jane Doe' },
  ]);

  async function copyRoomID(){  
    try{
        await navigator.clipboard.writeText(window.location.pathname.split('/').pop());
        toast.success("Room ID has been copied to clipboard.")
    } catch(err){
        toast.err("Could not copy room ID to clipboard.")
    }
  }

  function leaveRoom(){
    window.location.href = '/';             //can also use react Navigate
  }



  return (
    <Box display="flex" minHeight="100vh" backgroundColor="#040910" color="azure">

      <Box width="16%" backgroundColor="#0c1522" boxShadow="0px 0px 10px 0px rgba(255, 255, 255, 0.5)" display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" alignContent="flex-start" padding="15px">
        <img src="/icon.png" alt="icon"  padding="20px" style={{ borderBottom: '2px solid #424242' }} /><br></br>
        <h3 style={{ fontSize: '1.1rem',fontWeight: 'bold' }}>Connected</h3><br></br>

        <Box display="flex" flexDirection="column" flexWrap="wrap" gap="10px" flex="1" overflowY="auto">
          {users.map((user) => (
            <User key={user.socketID} username={user.username} />
          ))}
        </Box>
        
        <Button onClick={copyRoomID} marginTop="5px" width="100%" variant="solid" colorScheme="blue">Copy Room ID</Button><br></br>
        <Button onClick={leaveRoom} marginTop="5px" width="100%" variant="solid" colorScheme="red">Leave Room</Button>
      </Box>
      
      <Box>
        <Editor/>
      </Box>
    </Box>
  );
}

export default EditorPage;
