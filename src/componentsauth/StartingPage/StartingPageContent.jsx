import classes from "./StartingPageContent.module.css";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/joy/Button";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const StartingPageContent = () => {
  const navigate = useNavigate();

  return (
    <section className={classes.starting}>
      <div className={classes.starting__content}>
        <Link className={classes.donation} to="/donation">
          <h4>Apply for Donation</h4>
        </Link>
        <div className={classes.volunteers}>
          <h4>Volunteers</h4>
          <form
            method="POST"
            onSubmit={(event) => {
              event.preventDefault();
              navigate("/home");
            }}
          >
            <Stack spacing={2} direction="column">
              <TextField label="Name" name="name" variant="outlined" required />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                type="email"
                required
              />
              <TextField
                label="Contact No"
                name="phone"
                variant="outlined"
                required
              />
              <TextField
                label="Country"
                name="country"
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
                onClick={() => {
                  navigate("/home");
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </section>
  );
};

export default StartingPageContent;
