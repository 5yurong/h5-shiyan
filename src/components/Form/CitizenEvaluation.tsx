"use client";

import React, { useState, Fragment } from "react";
import { TextField, Button, Stack, Link, Card } from "@mui/material";
import { FormInput, FormSelect, Header } from "@/components";

let tolietList = [
  {
    value: "01",
    label: "公厕1",
    community: "所属社区1",
    tolietType: "公厕类型1",
  },
  {
    value: "02",
    label: "公厕2",
    community: "所属社区2",
    tolietType: "公厕类型2",
  },
  {
    value: "03",
    label: "公厕3",
    community: "所属社区3",
    tolietType: "公厕类型3",
  },
];
interface FormData {
  tolietCode: string;
  tolietName: string;
  evaluator: string;
  time: any;
  total: any;
  airQuality: string;
  surfaceAir: string;
  ventilate: string;
  facilityStatus: string;
  completeFacilities: string;
}

export function CitizenEvaluation() {
  const [flag, setFlag] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    // 在这里定义表单的字段
    tolietCode: "",
    tolietName: "",
    evaluator: "",
    time: new Date().toLocaleDateString().replace(/\//g, "-"), // 将默认值设置为当前时间,,
    total: "",
    airQuality: "",
    surfaceAir: "",
    ventilate: "",
    facilityStatus: "",
    completeFacilities: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFlag(false);
    const selectTolietName = tolietList.find(
      (item) => item.value === formData.tolietCode
    );

    formData.tolietName = selectTolietName ? selectTolietName.label : "";
    formData.total =
      Number(formData.airQuality) +
      Number(formData.surfaceAir) +
      Number(formData.ventilate) +
      Number(formData.facilityStatus) +
      Number(formData.completeFacilities);
    // 在这里处理表单提交逻辑
    console.log(formData, "formData");
  };

  return (
    <Fragment>
      <Header title="市民评价"></Header>
      <Card style={{ height: "calc(100vh - 56px)", overflow: "scroll" }}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={2}>
            <FormSelect
              title="公厕名称:"
              name="tolietCode"
              list={tolietList}
              isrequired={false}
              value={formData.tolietCode}
              onChange={handleChange}
              flag={flag || formData.tolietCode ? true : false}
            />
            <FormInput
              title="评价人:"
              name="evaluator"
              isrequired={false}
              value={formData.evaluator}
              placeholder="请输入"
              onChange={handleChange}
              flag={flag || formData.evaluator ? true : false}
            />
            <FormInput
              title="评价时间:"
              name="time"
              isrequired={false}
              disabled={true}
              value={formData.time}
              onChange={handleChange}
              flag={flag || formData.time ? true : false}
            />
            <FormInput
              title="总体评分:"
              name="total"
              isrequired={false}
              disabled={true}
              value={formData.total}
              onChange={handleChange}
              flag={flag || formData.total ? true : false}
            />
            <FormInput
              title="空气质量:"
              name="airQuality"
              isrequired={false}
              placeholder="0-5分"
              inputtype="number"
              value={formData.airQuality}
              onChange={handleChange}
              flag={flag || formData.airQuality ? true : false}
            />
            <FormInput
              title="地面空气:"
              name="surfaceAir"
              isrequired={false}
              placeholder="0-5分"
              inputtype="number"
              value={formData.surfaceAir}
              onChange={handleChange}
              flag={flag || formData.surfaceAir ? true : false}
            />
            <FormInput
              title="通风:"
              name="ventilate"
              isrequired={false}
              placeholder="0-5分"
              inputtype="number"
              value={formData.ventilate}
              onChange={handleChange}
              flag={flag || formData.ventilate ? true : false}
            />
            <FormInput
              title="设施状态:"
              name="facilityStatus"
              isrequired={false}
              placeholder="0-5分"
              inputtype="number"
              value={formData.facilityStatus}
              onChange={handleChange}
              flag={flag || formData.facilityStatus ? true : false}
            />
            <FormInput
              title="设施完备情况:"
              name="completeFacilities"
              isrequired={false}
              placeholder="0-5分"
              inputtype="number"
              value={formData.completeFacilities}
              onChange={handleChange}
              flag={flag || formData.completeFacilities ? true : false}
            />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Link href={"/"}>
                <Button
                  variant="outlined"
                  style={{ marginTop: "20px", marginRight: "20px" }}
                >
                  返回
                </Button>
              </Link>
              <Button
                type="submit"
                variant="outlined"
                style={{ marginTop: "20px" }}
              >
                提交
              </Button>
            </div>
          </Stack>
        </form>
      </Card>
    </Fragment>
  );
}
