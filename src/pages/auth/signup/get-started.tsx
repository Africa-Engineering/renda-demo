import React, { useEffect, useState, useMemo } from "react";
import { Input, Button, Select, PhoneNumberInput } from "@/components";
import { OnboardLayout } from "@/layout";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { formikCaption, formikError, phoneRegExp } from "@/utils";
import { StateReducerActions } from "@/types";
import { useDispatch, useSelector } from "react-redux";

import { OnboardRoutes } from "@/utils";
import { StoreState } from "@/store/types/store-state.types";

const industries = [
  "Agriculture and farming",
  "Automotive industry",
  "Banking and financial services",
  "Biotechnology and pharmaceuticals",
  "Chemicals",
  "Construction and engineering",
  "Consumer goods and services",
  "Education and training",
  "Energy and utilities",
  "Entertainment and media",
  "Food and beverage",
  "Healthcare and medical services",
  "Hospitality and tourism",
  "Information technology and services",
  "Insurance",
  "Manufacturing",
  "Mining and metals",
  "Non-profit and social services",
  "Real estate",
  "Retail and e-commerce",
  "Telecommunications",
  "Transportation and logistics",
  "Wholesale and distribution.",
];

const GetStarted = () => {
  const { getStarted } = useSelector((state: StoreState) => state);
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState(getStarted.phoneNumber);
  const [businessPhoneNumber, setBusinessPhoneNumber] = useState<string>(
    getStarted.businessPhoneNumber
  );
  const [businessIndustry, setBusinessIndustry] = useState<string | undefined>(
    industries.find((industry) => industry === getStarted.businessIndustry)
  );
  const router = useRouter();

  const dispatch = useDispatch();
  const next = (value: {
    businessName: string;
    contactPerson: string;
    businessEmailAddress: string;
    emailAddress: string;
    officeAddress: string;
    phoneNumber: string;
    businessPhoneNumber: string;
    businessIndustry: string | undefined;
    businessAddress?: string | undefined;
  }) => {
    dispatch({
      type: StateReducerActions.SET_GET_STARTED,
      payload: value,
    });
    router.push(OnboardRoutes.KYC_UPLOAD);
  };
  const formik = useFormik({
    initialValues: getStarted,
    validationSchema: Yup.object({
      businessName: Yup.string().required("Business name is required"),
      contactPerson: Yup.string().required("Contact person is required"),
      businessEmailAddress: Yup.string()
        .email("Invalid email format")
        .required("Business email required"),
      emailAddress: Yup.string()
        .email("Invalid email format")
        .required("Email required"),
      businessAddress: Yup.string().required("Address is required"),

      businessIndustry: Yup.string(),
      officeAddress: Yup.string(),
    }),
    onSubmit: (value) => {
      next({ ...value, phoneNumber, businessPhoneNumber, businessIndustry });
    },
  });

  const validatePhone = (phone: string) => {
    return (
      phoneRegExp.test("+" + phone) &&
      (phone.length === 14 || phone.length === 13)
    );
  };

  const validate = useMemo(() => {
    return (
      Object.values(
        Object.fromEntries(
          Object.entries(formik.values).filter(
            (v) =>
              ![
                "officeAddress",
                "phoneNumber",
                "businessPhoneNumber",
                "businessIndustry",
              ].includes(v[0])
          )
        )
      ).every((v) => v?.length! > 0) &&
      validatePhone(phoneNumber) &&
      businessIndustry &&
      validatePhone(businessPhoneNumber)
    );
  }, [formik]);

  return (
    <OnboardLayout>
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl text-primary font-bold">Get Started</h1>
          <p className="text-[13px] md:text-[16px] text-gray-400">
            {" "}
            Ready to create your profile? Tell us more about your Business.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <Input
              label="Business Name"
              value={formik.values.businessName}
              handleChange={formik.handleChange}
              name="businessName"
              placeholder="Enter Business Name"
              caption={formikCaption("businessName", formik)}
              error={formikError("businessName", formik)}
            />
            <Input
              label="Contact Person"
              value={formik.values.contactPerson}
              handleChange={formik.handleChange}
              name="contactPerson"
              placeholder="Enter Contact Person"
              caption={formikCaption("contactPerson", formik)}
              error={formikError("contactPerson", formik)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <Input
              label="Business Email Address"
              type="email"
              value={formik.values.businessEmailAddress}
              handleChange={formik.handleChange}
              name="businessEmailAddress"
              placeholder="Enter Bussiness Email Address"
              caption={formikCaption("businessEmailAddress", formik)}
              error={formikError("businessEmailAddress", formik)}
            />
            <Input
              label="Email Address"
              type="email"
              value={formik.values.emailAddress}
              handleChange={formik.handleChange}
              name="emailAddress"
              placeholder="Enter Email Address"
              caption={formikCaption("emailAddress", formik)}
              error={formikError("emailAddress", formik)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-baseline">
            <Input
              label="Business Address"
              type="tel"
              value={formik.values.businessAddress}
              handleChange={formik.handleChange}
              name="businessAddress"
              placeholder="Enter Email Address"
              caption={formikCaption("businessAddress", formik)}
              error={formikError("businessAddress", formik)}
            />

            <PhoneNumberInput
              label="Phone Number"
              handleChange={setPhoneNumber}
              value={phoneNumber}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <PhoneNumberInput
              label="Business Phone Number"
              handleChange={setBusinessPhoneNumber}
              value={businessPhoneNumber}
            />

            <Select
              label="Business Industry"
              options={industries}
              placeholder="Select your business "
              value={businessIndustry}
              name="businessIndustry"
              caption={formikCaption("businessIndustry", formik)}
              error={formikError("businessIndustry", formik)}
              handleChange={(e) => setBusinessIndustry(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3 items-center">
            <Input
              label="Office Address (If different from the business address)"
              type="tel"
              value={formik.values.officeAddress}
              handleChange={formik.handleChange}
              name="officeAddress"
              placeholder="Enter Office Address"
              caption={formikCaption("officeAddress", formik)}
              error={formikError("officeAddress", formik)}
            />
            <div></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Button
              title="Back"
              size="sm"
              variant="secondary"
              className="!text-gray-600"
              handleClick={() => router.back()}
            />
            <Button
              title="Next"
              size="sm"
              handleClick={formik.handleSubmit}
              loading={loading}
              disabled={!validate}
            />
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
};

export default GetStarted;
