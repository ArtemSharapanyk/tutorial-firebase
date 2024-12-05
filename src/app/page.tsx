import { CreateUserForm } from "./widgets/CreateUserForm/CreateUserForm";
import { LoginUserForm } from "./widgets/LoginUserForm/LoginUserFrom";
import { LoginWithGoogle } from "./widgets/LoginWithGoogle/LoginWithGoogle";
import { UserCard } from "./widgets/UserCard/UserCard";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div style={{ margin: 20, border: "1px solid red" }}>
        <h2 style={{ marginBlock: 10 }}>Create User</h2>
        <CreateUserForm />
      </div>
      <div style={{ margin: 20, border: "1px solid red" }}>
        <h2 style={{ marginBlock: 10 }}>Login User</h2>
        <LoginUserForm />
      </div>

      <div style={{ margin: 20, border: "1px solid blue" }}>
        <LoginWithGoogle />
        NikitaPozer
      </div>

      <div style={{ margin: 20, border: "1px solid red" }}>
        <UserCard />
      </div>
    </div>
  );
}
