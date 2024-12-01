import React, { useState } from "react";

import styles from "./RegistrationForm.module.css";

import FormInput from "../../components/ui/input/FormInput";
import Button from "../../components/ui/button/Button";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");
  const [englishLevel, setEnglishLevel] = useState("");
  const [level, setLevel] = useState("Kids" | "General");

  return (
    <div className={styles.globalForm}>
      <form className={styles.form}>
        <h1 className={styles.title}>Birinchi darsga yoziling!</h1>
        <FormInput
          label="Ism:"
          placeholder="Komilova Komila"
          value={name}
          onChange={setName}
        />
        <FormInput
          label="Telefon raqam:"
          placeholder="+998 xx xxx xx xx"
          value={phone}
          onChange={setPhone}
        />
        <FormInput
          label="Bizni haqimizda qayerdan eshitdingiz:"
          placeholder="telegram, instagram, youtube va ..."
          value={source}
          onChange={setSource}
        />
        <FormInput
          label="Ingliz tili bo'yicha muammoyingiz:"
          placeholder="Ingliz tilida gapira olmayman..."
          value={englishLevel}
          onChange={setEnglishLevel}
        />
        <div className={styles.levelContainer}>
          <p className={styles.levelLabel}>Darajangizni tanlang:</p>
          <div className={styles.buttonGrid}>
            <Button
              variant={level === "Kids" ? "primary" : "secondary"}
              onClick={() => setLevel("Kids")}
              title={"Kids"}
            ></Button>
            <Button
              variant={level === "General" ? "primary" : "secondary"}
              onClick={() => setLevel("General")}
              title={"General"}
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
