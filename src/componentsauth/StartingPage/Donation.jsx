import React, { useState } from "react";
import Layout from "../Layout/Layout";
import classes from "./Donation.module.css";
import { TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/material";

const Donation = () => {
  const [open, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [donation, setDonation] = useState("");

  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const donationHandler = (event) => {
    setDonation(event.target.value);
    console.log(donation);
  };

  return (
    <Layout>
      <div className={classes.donation}>
        <div className={classes.donate}>
          <h4>Donation</h4>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setIsOpen(true);
              //   navigate("/home");
              setName("");
              setEmail("");
              setDonation("");
            }}
          >
            <Stack spacing={3} direction="column">
              <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={nameHandler}
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={emailHandler}
                required
              />
              <TextField
                label="Amount"
                type="number"
                value={donation}
                onChange={donationHandler}
                variant="outlined"
                required
              />
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#31b5aa",

                  "&:hover": {
                    backgroundColor: "#31b5aa",
                  },
                }}
                onClick={() => {}}
              >
                Donate now
              </Button>
            </Stack>
          </form>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Donation added successfully!"
      />
      ;
    </Layout>
  );
};

export default Donation;
