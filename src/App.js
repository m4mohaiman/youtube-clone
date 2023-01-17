
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/system';
import { Navbar , Feed , VideoDetails , ChannalDetails , SearchFeed } from './components';


const App = () =>(
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed></Feed>}></Route>
        <Route path='/video/:id' element={<VideoDetails></VideoDetails>}></Route>
        <Route path='/channal/:id' element={<ChannalDetails></ChannalDetails>}></Route>
        <Route path='/search/:searchTerm'  element={<SearchFeed></SearchFeed>}></Route>
      </Routes>
    </Box>
  </BrowserRouter>
)

export default App;
