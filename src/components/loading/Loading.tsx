import React from "react";
import "./Loading.scss";
import { IonSpinner } from "@ionic/react";

const Loading: React.FunctionComponent = () => {
  return (
    <div className="loading-spinner-area">
      <IonSpinner name="crescent" />
    </div>
  );
};

export default Loading;
