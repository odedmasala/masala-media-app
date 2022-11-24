import { Box, useMediaQuery } from "@mui/material";
import { selectUser } from "features/authSlice";
import Navbar from "pages/navbar";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import UserWidget from "pages/widgets/UserWidget";
import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector(selectUser);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2ram"}
        >
          <MyPostWidget picturePath={picturePath} />
          {/* <PostsWidget userId={_id} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
