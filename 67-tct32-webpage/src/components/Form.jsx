import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { TextField, Button, Select } from "@material-ui/core";

const useStyles = makeStyles({
  form: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
    backgroundColor: "#f5f5f5",
    textAlign: "center",
    marginTop: "center"
  },
  field: {
    margin: "10px 0",
    backgroundColor: "#ffffff"
  },
  select: {
    width: "200px",
    backgroundColor: "#ffffff"
  },
  button: {
    backgroundColor: "#009688",
    color: "#ffffff",
    "&:hover": {
    backgroundColor: "#00796b"
    }
  }
});

const Form = () => {
    const classes = useStyles(); // Use the classes object for styling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    room: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>จองห้องเรียน</h2>
      <div>
      <TextField  sx={{ width: 200 }}// Use TextField component here
        className={classes.field}
        label="ชื่อ"
        variant="outlined"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      </div>
      <div>
      <TextField  sx={{ width: 200 }}// Use TextField component here
        className={classes.field}
        label="อีเมล"
        variant="outlined"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      </div>
      <div>
      <TextField  sx={{ width: 200 }}// Use TextField component here
        className={classes.field}
        label="เบอร์โทรศัพท์"
        variant="outlined"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      </div>
      <div>
      <TextField  sx={{ width: 200 }}// Use TextField component here
        className={classes.field}
        variant="outlined"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      </div>
      <div>
      <TextField  sx={{ width: 200 }}// Use TextField component here
        className={classes.field}
        variant="outlined"
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
      />
      </div>
      <div>
      <Select  // Use Select component here
        className={classes.field}
        label="ห้อง"
        variant="outlined"
        name="room"
        value={formData.room}
        onChange={handleChange}
      >
        <option value="">เลือกห้อง</option>
        <option value="1">ห้อง 701</option>
        <option value="2">ห้อง 702</option>
        <option value="3">ห้อง 703</option>
        <option value="4">ห้อง 704</option>
        <option value="5">ห้อง 705</option>
        <option value="6">ห้อง 706</option>
        <option value="7">ห้อง 707</option>
        <option value="8">ห้อง 708</option>
        <option value="9">ห้อง 709</option>
      </Select>
      </div>
      <div>
      <Button type="submit" className={classes.button}>
        จองห้อง
      </Button>
      </div>
    </form>
  );
};

export default Form;