import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CurrencySymbol from "../../../components/general/CurrencySymbol";
import { colorTypes } from "../../../components/general/Label";
import ReUseableTable from "../../../components/general/ReUseableTable";
import TabLight from "../../../components/general/TabLight";
import AppLayout from "../../../components/layouts/AppLayout";
import { getAllTransactions } from "../../../services/cooperative-members.js";
import formatNumberWithCommas from "../../../utils/addCommas";
import formatDate from "../../../utils/formatDate";

const TransactionHistory = () => {
  const headers = ["Transaction ID", "Date", "Amount", "Type", "Status", "Action"];
  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  let rowPerPage = 3;
  const labelColorMap = {
    pending: "warn",
    failed: "error",
    success: "success",
  };

  useEffect(() => {
    let fetchBuildSetTransactions = async () => {
      let respData = await getAllTransactions(currentPage, rowPerPage);
      console.log(respData);
      if (respData?.status) {
        let rows = respData?.data?.data?.map((el) => {
          return {
            id: el?.id,
            date: `${formatDate(el?.createdAt)}, ${new Date(el?.createdAt).toLocaleTimeString("en-us", { timeStyle: "short" })}`,
            amount: el?.amount,
            type: el?.type,
            status: { color: labelColorMap[el?.status], name: el?.status },
            action: "View",
          };
        });
        console.log("rows are ", rows);
        setRows(rows);
        setTotalPage(respData?.data?.totalPages);
      } else {
        setRows([]);
        toast.error("Problem fetching transactions");
      }
    };

    fetchBuildSetTransactions();
  }, [currentPage]);
  return (
    <AppLayout>
      <main className=" mt-[1.6rem]">
        <TabLight className={"mb-[2.8rem]"} items={["All (2000)", "Pending (400)", "Failed (200)", "Successful (1400)"]}></TabLight>

        <ReUseableTable
          rowPerPage={rowPerPage}
          totalPage={totalPage}
          currentPage={currentPage}
          rows={rows}
          headers={headers}
          onPrev={() => {
            setCurrentPage((val) => (val > 1 ? val - 1 : val));
          }}
          onNext={() => {
            setCurrentPage((val) => (val < totalPage ? val + 1 : val));
          }}
        ></ReUseableTable>
      </main>
    </AppLayout>
  );
};

export default TransactionHistory;
