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
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
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
            }}
          >
            <Stack spacing={3} direction="column">
              <TextField label="Name" variant="outlined" required />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                required
              />
              <TextField
                label="Amount"
                type="number"
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
