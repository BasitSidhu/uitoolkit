import Button from "@/component/Button/Button";
import CheckBox from "@/component/checkbox/CheckBox";
import FiledsetInput from "@/component/input/fieldsetlegendInput/FiledsetInput";
import SimpleInput from "@/component/input/simpleInput/SimpleInput";
import Select from "@/component/select/Select";
import Toggle from "@/component/toggle/Toggle";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      {/* <CheckBox /> */}
      <Toggle/>
      {/* <Select /> */}
      {/* <Button /> */}
      {/* <SimpleInput />
      <FiledsetInput /> */}
    </div>
  );
};

export default page;
