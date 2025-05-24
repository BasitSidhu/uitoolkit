import React from "react";
import style from "./FiledsetInput.module.css";
const FiledsetInput = () => {
  return (
    <>
      {/* first label moved */}
      <div className={style.formGroup}>
        <input
          type="text"
          id="outlined"
          className={style.formInput}
          placeholder=" "
        />
        <label htmlFor="outlined" className={style.formLabel}>
          Outlined
        </label>
      </div>
      {/* label moved and underline  */}
      <div className={style.formGroup1}>
        <input
          type="text"
          id="outlined"
          className={style.formInput1}
          placeholder=" "
        />
        <label htmlFor="outlined" className={style.formLabel}>
          Outlined
        </label>
      </div>

      <div className={style.heading}>
        {/* <h1>My Comment</h1> */}
        <input type="text" placeholder="" />
      </div>

      <fieldset
        style={{
          border: " 1px solid gray",
          padding: "10px",
        }}
      >
        <legend>Personalia:</legend>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <br />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <br />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <br />
        <br />
        <label htmlFor="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday" />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </fieldset>
    </>
  );
};

export default FiledsetInput;
