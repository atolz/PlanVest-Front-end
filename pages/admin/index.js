import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router?.replace("/admin/dashboard");
  }, []);
  return <div>Admin</div>;
};

export default Index;
