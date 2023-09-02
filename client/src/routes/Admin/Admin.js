import React, { useEffect } from "react";
import { useFetch } from "../../hooks.js/useFetch";
import Styles from "./Admin.module.scss";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../../elements/loadingSpinner/loadingSpinner";
import PhotoAttachments from "../../components/Admin/PhotoAttachments";
import Consultations from "../../components/Admin/Consultations";

const Admin = () => {
  const { loading, response, error } = useFetch({
    url: "http://127.0.0.1:4000/api/v1/forms/",
    method: "get",
  });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(response);
    navigate({
      pathname: "photos",
    });
  }, [response]);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <NavLink activeClassName={Styles.active} to="photos">
          Формы с фото
        </NavLink>
        <NavLink activeClassName={Styles.active} to="consultations">
          Формы с консультациями
        </NavLink>
      </div>
      {loading && (
        <div className={Styles.spinnerBox}>
          <LoadingSpinner />
        </div>
      )}
      <Routes>
        <Route
          path="/photos"
          element={<PhotoAttachments forms={response?.forms} />}
        />
        <Route
          path="/consultations"
          element={<Consultations forms={response?.forms} />}
        />
      </Routes>
    </div>
  );
};

export default Admin;
