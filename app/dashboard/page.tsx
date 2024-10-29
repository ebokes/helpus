"use client";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <>
          <div>Dashboard coming soon</div>
          <Button onClick={() => signOut()}>Logout</Button>
        </>
      ) : (
        <div>Sign in to view your dashboard</div>
      )}
    </div>
  );
};

export default Dashboard;
