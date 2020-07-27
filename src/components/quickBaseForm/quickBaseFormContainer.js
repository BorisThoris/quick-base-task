import React from "react";

import { setLocale } from "react-redux-i18n";
import { connect } from "react-redux";
import { appOperations } from "../../duck";

import QuickBaseForm from "./quickBaseForm";

const mapStateToProps = (store) => {
  const channels = store.appData.channels;
  const i18n = store.i18n;

  return {
    channels,
    i18n,
    store,
  };
};

const mapDispatchToProps = (dispatch, store) => {
  const GetInitialData = () => dispatch(appOperations.fetchInitialData());
  const UpdateProject = (data) => dispatch(appOperations.updateProject(data));
  const SwitchLang = (lang) => dispatch(setLocale(lang));

  return {
    GetInitialData,
    UpdateProject,
    SwitchLang,
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(QuickBaseForm);
function CompaniesListContainer() {
  return <Container></Container>;
}

export default CompaniesListContainer;
