import React, { useState } from "react";
import Layout from "../Layout/Layout";
import classes from "./Donation-table.module.css";
import {
  Table,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
const DonationTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      fetch(
        "https://solutionchallenge-c9532-default-rtdb.firebaseio.com/donation.json"
      )
        .then((res) => res.json())
        .then((data) => {
          const donationData = [];
          let i = 1;
          for (const key in data) {
            const donation = {
              id: i++,
              key,
              ...data[key],
            };
            donationData.push(donation);
          }
          setLoading(false);
          setData(donationData);
          console.log(donationData);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  if (loading) {
    return (
      <div className={classes.loading}>
        <CircularProgress />;
      </div>
    );
  }
  return (
    <Layout>
      {!loading && (
        <div className={classes.table}>
          <h1 className={classes.donate_head}>Donation Record</h1>
          <Stack
            my={6}
            sx={{
              width: "80%",
              margin: "auto",
            }}
          >
            <TableContainer
              component={Paper}
              sx={{
                maxHeight: "400px",
              }}
            >
              <Table
                stickyHeader
                aria-label="Table"
                sx={{
                  width: {
                    sx: "100%",
                  },
                }}
              >
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.head}>Id</TableCell>
                    <TableCell className={classes.head}>First Name</TableCell>
                    <TableCell className={classes.head}>Email</TableCell>
                    <TableCell className={classes.head}>Donation</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item) => {
                    return (
                      <TableRow key={item.key}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.donation}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </div>
      )}
    </Layout>
  );
};

export default DonationTable;
