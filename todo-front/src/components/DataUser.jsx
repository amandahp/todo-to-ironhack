import { useState } from "react";
import {
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export const DataUser = ({ register, onClick, nameValue, emailValue, passwordValue, handleClickSignIn, setPasswordValue, setEmailValue, setNameValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">{register ? 'Register' : 'Login'}</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                {register ?
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaUserAlt color="gray.300" />}
                    />
                    <Input type="text" placeholder="Full Name" value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                    />
                  </InputGroup> :
                  ""
                }
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="E-mail address" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={onClick}
              >
                {register ? "Sign Up" : "Login"}
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      {
        register ?
          <Box>
            Already registered?{" "}
            <Button variant="ghost" color="teal.500" onClick={handleClickSignIn}>
              Login
            </Button>
          </Box> :
          <Box>
            New to us?{" "}
            <Button variant="ghost" color="teal.500" onClick={handleClickSignIn}>
              Sign Up
            </Button>
          </Box>
      }
    </>
  );
};


