import { Flex } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { DataUser } from "../components";
import { loginApi } from "../services";
import { useCookies } from "react-cookie";


export const Login = () => {
  const navigate = useNavigate()
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [cookies, setCookie] = useCookies();


  const handleClickLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await loginApi({ email: emailValue, password: passwordValue })
      setCookie('token', response.data.token);
      setCookie('email', emailValue)
      navigate("/todo")
      setEmailValue('')
      setPasswordValue('')

    } catch (error) {
      console.log(error)

    }
  }

  const handleClickRegister = () => {
    navigate("/register")
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <DataUser
        handleClickSignIn={handleClickRegister}
        onClick={handleClickLogin}
        emailValue={emailValue}
        passwordValue={passwordValue}
        setEmailValue={setEmailValue}
        setPasswordValue={setPasswordValue}
      />
    </Flex>
  )
}