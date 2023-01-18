import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Navbar,
  Feed,
  VideoDetails,
  ChannelDetails,
  SearchFeed,
} from "./components";

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed></Feed>}></Route>
        <Route
          path="/video/:id"
          element={<VideoDetails></VideoDetails>}
        ></Route>
        <Route
          path="/channel/:id"
          element={<ChannelDetails></ChannelDetails>}
        ></Route>
        <Route
          path="/search/:searchTerm"
          element={<SearchFeed></SearchFeed>}
        ></Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
