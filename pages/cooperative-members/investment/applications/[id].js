import { useRouter } from "next/router";
import React from "react";
import GoBack from "../../../../components/general/GoBack";
import Label from "../../../../components/general/Label";
import AppLayout from "../../../../components/layouts/AppLayout";

const ApplicationDetails = () => {
  const router = useRouter();
  return (
    <AppLayout>
      <div className="flex items-center justify-between">
        <GoBack name={router?.query?.id} link={"/cooperative-members/investment/applications"}></GoBack>
        <Label type={router?.query?.label} text={router?.query?.status}></Label>
      </div>
    </AppLayout>
  );
};

export default ApplicationDetails;
