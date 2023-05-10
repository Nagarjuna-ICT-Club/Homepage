import React from "react";
import { Link } from "react-router-dom";
import "./link.scss";

const LinkComponent = ({ path, title }) => {
  return <Link to={`${path}`}>{title}</Link>;
};

export default LinkComponent;
