import React from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { registerApi } from "../services";
import { DataUser } from "../components";

export const Register = () => {
  const navigate = useNavigate();
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');


  const handleClickRegister = async (e) => {
    try {
      e.preventDefault()
      await registerApi({ password: passwordValue, name: nameValue, email: emailValue })

    } catch (e) {
      console.log("error", e)

    }
  }
  const handleClickLogin = () => {
    navigate('/login')
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
        register={true}
        onClick={handleClickRegister}
        nameValue={nameValue}
        emailValue={emailValue}
        passwordValue={passwordValue}
        handleClickSignIn={handleClickLogin}
        setNameValue={setNameValue}
        setEmailValue={setEmailValue}
        setPasswordValue={setPasswordValue}
      />
    </Flex>
  )
}