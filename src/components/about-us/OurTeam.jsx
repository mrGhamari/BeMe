import React from "react";
import { Grid, Container } from "@mui/material";
import { teamImageList } from ".";

function OurTeam() {
  return (
    <div className="flex py-10 flex-col items-center text-justify">
      <main>
        <h3 className="text-3xl font-bold mb-5">تیم ما</h3>
        <Container sx={{ py: 3 }} className={"bg-dark w-full"}>
          <Grid container className="justify-center" spacing={4}>
            {teamImageList}
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default OurTeam;
