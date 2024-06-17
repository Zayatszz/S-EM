'use client'
import DefaultHeader from "@/app/components/common/Header";
import ContractsTable from "@/app/components/common/EmployerContractsTable";
import React, { useState } from 'react';
import Image from "next/image";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const ListingV1 = () => {
  const [step, setStep] = useState(1);
  const [dates, setDates] = useState([]);
  const [startTime, setStartTime] = useState("00:00");
  const [endTime, setEndTime] = useState("00:00");
  console.log(dates);
  const handleStartTimeChange = (time) => {
    setStartTime(time);
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
  };

  const time = 
    {
      label: "Төрөл",
      name: "condition",
      type: "select",
      options: ["Цагаар", "Өдрөөр", "Сараар"],
    }
  


  return (
    <div className="wrapper">
      <DefaultHeader />
      <div className="">
        <section className=" pt10 bgc-f9">
          <div className="container">
          <ContractsTable/>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ListingV1;
