import { AuthGuard } from "@auth";
import { Profile } from "@components";
const ProfilePage = () => {
  return (
    <AuthGuard>
      <Profile />
    </AuthGuard>
  );
};

export default ProfilePage;
