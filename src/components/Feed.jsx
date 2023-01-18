import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utilities/fetchFromAPI";
import { Sidebar, Videos } from "./index";

const Feed = () => {
  const [selectCategory, setSelectCategory] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectCategory]);

  return (
    <>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectCategory={selectCategory}
            setSelectCategory={setSelectCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright © 2023 Moh Media
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectCategory} <span style={{ color: "#FC1503" }}>videos</span>
          </Typography>
          <Videos videos={videos}></Videos>
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
