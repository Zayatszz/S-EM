'use client'
import Header from "@/app/components/common/Header";
import ContractsTable from "@/app/components/common/EmployerContractsTable";
import React, { useState } from 'react';
import Image from "next/image";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

const ListingV1 = () => {
  return (
    <div className="wrapper">
      <Header />
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
