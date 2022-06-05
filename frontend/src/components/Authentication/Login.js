import React, {useState} from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const handleShowClick = () => setShow(!show);
    const submitHandler = () =>{};
  return <VStack >
      <FormControl id='email' isRequired>
          <FormLabel>Email</FormLabel>
          <Input
          placeholder='Enter Your Email'
          onChange={(e) => setEmail(e.target.value)}/>
      </FormControl>
      <FormControl id='password' isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={show ? "text" : "password"}
              placeholder='Enter Your Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                    {show ? "Hide" : "Show"}
                </Button>

            </InputRightElement>
          </InputGroup>
         
      </FormControl>
      <Button colorScheme="blue"
        width="100%"
        style={{marginTop: 15}}
        onClick={submitHandler}
      >
          LogIn
      </Button>
      <Button variant="solid"
      colorScheme="red"
      width="100%"
      onClick= {() => {
          console.log("User credentials cliked");
          setEmail("guest@example.com");
          setPassword("123456");
      }}
      >
          Get Guest User Credentials
      </Button>
  </VStack>
}

export default Login