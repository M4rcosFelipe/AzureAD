import { Container, Buttons, Response } from "./styles";
import { DefaultButton, Typografy } from "@components";
import useAuth from "src/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [response, setResponse] = useState("");
  const { login, logout, isAuth, getAccessToken, getAccountInfo, init } =
    useAuth();
  const isAuthenticated = isAuth();

  const handleResponse = async (response) => {
    setResponse(JSON.stringify(response, null, 4));
  };
  return (
    <Container>
      <Buttons>
        <Typografy variant="h1">
          {isAuthenticated ? "Usuário Logado" : "Faça Login"}
        </Typografy>

        <DefaultButton
          margin={"20px 0px 0px 0px"}
          onClick={async () => handleResponse(await login())}
        >
          Login
        </DefaultButton>
        <DefaultButton
          margin={"10px 0px 0px 0px"}
          onClick={async () => handleResponse(await logout())}
        >
          Logout
        </DefaultButton>

        <DefaultButton
          margin={"10px 0px 0px"}
          onClick={async () => handleResponse(await getAccessToken())}
        >
          getAccessToken
        </DefaultButton>
        <Link href="/dashboard" passHref>
          <DefaultButton margin={"10px 0px 0px"}>Dashboard</DefaultButton>
        </Link>

        <Link href="/profile" passHref>
          <DefaultButton margin={"10px 0px 0px"}>Profile</DefaultButton>
        </Link>

        <DefaultButton
          margin={"10px 0px 0px"}
          onClick={async () => handleResponse(await getAccountInfo())}
        >
          getAccountInfo
        </DefaultButton>

        <DefaultButton
          margin={"10px 0px 0px"}
          onClick={() => handleResponse(isAuthenticated)}
        >
          isAuth
        </DefaultButton>
      </Buttons>
      <Response>
        <Typografy variant={"h5"}>Response:</Typografy>
        <Typografy variant={"pre"}>{response ?? response}</Typografy>
      </Response>
    </Container>
  );
};

export default Home;
