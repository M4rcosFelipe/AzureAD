import { Typografy } from "@components";
import { AuthGuard } from "@auth";
const Dashboard = () => {
  return (
    <AuthGuard>
      <Typografy variant="h1">Dashboard</Typografy>
      <Typografy variant="p">(Página privada)</Typografy>
    </AuthGuard>
  );
};

export default Dashboard;
