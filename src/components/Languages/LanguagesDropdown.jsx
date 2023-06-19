import React from "react";
import { Select, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };
  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    handleLanguageChange(selectedLanguage);
  };

  return (
    <Select
      defaultValue="en"
      onChange={handleChange}
      style={{
        height: "2.5rem",
        backgroundColor: "white",
        marginLeft: 4,
        marginBottom: 18,
        alignSelf: "end",
      }}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="ar">Arabic</MenuItem>
    </Select>
  );
};

export default LanguageDropdown;
