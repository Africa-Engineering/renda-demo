import { Button, FileInput, Input } from "@/components";
import { OnboardLayout } from "@/layout";
import { StoreState } from "@/store/types/store-state.types";

import { StateReducerActions } from "@/types";
import { OnboardRoutes, formikCaption, formikError } from "@/utils";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

const KycUpload = () => {
  const { fileList, companyRegistrationNumber } = useSelector(
    (state: StoreState) => state
  );
  const [registrationCertificate, setRegistrationCertificate] = useState<
    File[]
  >(fileList.registrationCertificate);
  const [proofOfAddress, setProofOfAddress] = useState<File[]>(
    fileList.proofOfAddress
  );
  const [directorsIds, setDirectorsIds] = useState<File[]>(
    fileList.directorsIds
  );

  const router = useRouter();
  const dispatch = useDispatch();
  const next = () => {
    const fd = new FormData();

    fd.append("CompanyRegistrationCertificate", registrationCertificate[0]);
    fd.append("ProofOfAddress", proofOfAddress[0]);
    for (let i = 0; i < directorsIds.length; i++) {
      fd.append("DirectorsIDs", directorsIds[i]);
    }
    dispatch({
      type: StateReducerActions.SET_KYC,
      payload: fd,
    });
    dispatch({
      type: StateReducerActions.SET_COMPANY_NUMBER,
      payload: formik.values.number,
    });
    dispatch({
      type: StateReducerActions.UPDATE_FILE_LIST,
      payload: { registrationCertificate, proofOfAddress, directorsIds },
    });
    router.push(OnboardRoutes.SET_PASSWORD);
  };

  const formik = useFormik({
    initialValues: { number: companyRegistrationNumber },
    validationSchema: Yup.object({
      number: Yup.string()
        .min(7, "Registration number should be seven characters")
        .max(7, "Registration number should be seven characters")
        .required("CAC number required"),
    }),
    onSubmit: () => {
      next();
    },
  });
  const validate = useMemo(() => {
    return Boolean(
      formik.values.number &&
        registrationCertificate.length > 0 &&
        directorsIds.length > 0 &&
        proofOfAddress.length > 0
    );
  }, [formik, registrationCertificate, directorsIds, proofOfAddress]);
  return (
    <OnboardLayout>
      <div className="w-full">
        <div>
          <h1 className="text-3xl text-primary font-bold mb-1">
            KYC Upload
          </h1>
          <p className="text-[13px] md:text-[16px] text-gray-400">
            {" "}
            To activate your profile? Tell us more about your Business.
          </p>
        </div>
        <div className="w-full mt-4">
          <Input
            label="Company Registration Number"
            className="max-w-md"
            value={formik.values.number}
            handleChange={formik.handleChange}
            caption={formikCaption("number", formik)}
            error={formikError("number", formik)}
            name="number"
          />
          <FileInput
            title="Company Registration Certificate"
            handleChange={setRegistrationCertificate}
            value={registrationCertificate}
          />
          <FileInput
            title="Proof of Address (Utility bill - Electricity/LAWMA, etc)"
            handleChange={setProofOfAddress}
            value={proofOfAddress}
          />
          <FileInput
            title="Directors ID"
            multiple={true}
            handleChange={setDirectorsIds}
            value={directorsIds}
          />
        </div>
        <div className="mt-10">
          <Button
            title="Next"
            size="sm"
            handleClick={formik.handleSubmit}
            className="w-full"
            disabled={!validate}
          />
        </div>
      </div>
    </OnboardLayout>
  );
};

export default KycUpload;
