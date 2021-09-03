import { Typografy } from "@components";
import { useEffect, useState } from "react";
import useAuth from "src/hooks/useAuth";
import { AuthGuard } from "@auth";
const Profile = () => {
  const { getAccountInfo } = useAuth();
  const [accountName, setAccountName] = useState();

  useEffect(() => {
    const { name } = getAccountInfo();
    setAccountName(name);
  }, [getAccountInfo]);

  return (
    <AuthGuard>
      <Typografy variant={"h1"}>Bem vindo, {accountName}</Typografy>
      <Typografy variant="p">(Página privada)</Typografy>;
    </AuthGuard>
  );
};

export default Profile;
