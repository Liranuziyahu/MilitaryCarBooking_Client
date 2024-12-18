import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {FormPage  , NofeshIntro } from './index' 

const Router = () => {
  return (
    <Routes>
      <Route path="/intro" element={<NofeshIntro />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Navigate to="/intro" />}></Route>
    </Routes>
  );
};

export default Router;
