import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Paper } from "@mui/material";
import TopPosts from "../../containers/TopPosts/TopPosts";
import TabPanel from "./TabPanel";
import { BootstrapButton } from "../Buttons/BootstrapButton";
import { Link, useNavigate } from "react-router-dom";

// Topics Tab component

const TopicsTab = () => {
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("algorithms");
  const navigate = useNavigate();

  // const handleMorePosts = ()=>{
  //   navigate(`/posts`, { state: { category }} );
  // }

  console.log("category: ", category);

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        setCategory("algorithms");
        break;
      case 1:
        setCategory("engineering");
        break;
      case 2:
        setCategory("tutorials");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // handleMorePosts(category);
  }, [category]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Paper elevation={1} sx={{ maxWidth: "100%", minWidth: "50%" }}>
          <Box sx={{ bgcolor: "#00AACC" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              textColor="inherit"
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: "#e0e0eb", height: 4 },
              }}
              action={() => {}}
              sx={{
                "& button": {
                  textTransform: "none",
                  marginTop: 1,
                  fontSize: 16,
                },
                "& button:hover": { backgroundColor: "#fff", color: "#00AACC" },
                "& button:focus": { backgroundColor: "#fff", color: "#00AACC" },
                "& button:active": {
                  backgroundColor: "#fff",
                  color: "#00AACC",
                },
                "& button:Mui-selected": {
                  backgroundColor: "#000",
                  color: "#00AACC",
                },
              }}
            >
              <Tab
                sx={{ color: "#e0e0eb" }}
                label="Algorithms & Data Structures"
              />
              <Tab sx={{ color: "#e0e0eb" }} label="Software Engineering" />
              <Tab sx={{ color: "#e0e0eb" }} label="Tutorials" />
            </Tabs>
          </Box>
          <Box>
            <TabPanel value={value} index={0}>
              <TopPosts category="algorithms" />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TopPosts category="engineering" />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TopPosts category="tutorials" />
            </TabPanel>
          </Box>
        </Paper>
      </Box>
      {/* 
        More post cards about the selected category
       */}
      <Box sx={{ display: "flex", justifyContent: "center", margin: 3 }}>
        <Link
          to={{
            pathname: "/posts",
            search: `?tag=${category}`,
            // hash: "#the-hash",
            state: { Posts: true },
          }}
          style={{
            textDecoration: "none",
            color: "ghostwhite",
            width: "300px",
            height: "30px",
            border: "1px solid #00AACC",
            textAlign: "center",
            backgroundColor: "#00AACC",
            borderRadius: "10%",
          }}
        >
          <span>
            More posts on{" "}
            {category === "algorithms"
              ? "Algorithms and Data Structures"
              : category === "tutorials"
              ? "Programming Tutorials"
              : "Software Engineering"}
          </span>
        </Link>
        {/* <BootstrapButton
          sx={{
            padding: 1,
            backgroundColor: "#00AACC",
            border: "none",
            color: "ghostwhite",
            textTransform: "none",
          }}
          onClick={()=>handleMorePosts() }
        >
          <span>
            More posts on{" "}
            {category === "algorithms"
              ? "Algorithms and Data Structures"
              : category === "tutorials"
              ? "Programming Tutorials"
              : "Software Engineering"}
          </span>
        </BootstrapButton> */}
      </Box>
    </>
  );
};

export default TopicsTab;
