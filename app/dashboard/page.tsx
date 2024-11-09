"use client";

const Dashboard = () => {
  // const handleLogout = async () => {
  //   await signOut({ callbackUrl: "/" });
  // };

  // const { data: session } = useSession();
  return (
    <div>
      {/* {session ? (
        <>
          <div>Dashboard coming soon</div>
          <div>Welcome, {session?.user?.name}</div>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : ( */}
      <div>Sign in to view your dashboard</div>
      {/* )} */}
    </div>
  );
};

export default Dashboard;
