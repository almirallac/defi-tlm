import React, {useState,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BuzzwordInput from './components/BuzzwordInput';
import Footer from './components/Footer';
import Loading from './components/Loading'
import axios from "axios";
import baseUrl from "./utils/baseUrl";
import { getNinjaName } from './utils/getNinjaName';

const theme = createTheme();

export default function NinjaNameGenerator() {
  const [loading, setLoading] = useState(false);
  const [ninjaName, setNinjaName] = useState('');
  const [technologies, setTechnologies] = useState([]);
  const [technologiesLoaded, setTechnologiesLoaded] = useState(false);
  const [technologiesSelected, setTechnologiesSelected] = useState([]);
  const [loadingTechnology, setLoadingTechnology] = useState(false);


  const handleError = () => {
    console.log('error');
  }

  const handleSuccess = (e) => {
    setNinjaName(e.name);
  }

  const handleChange = (value) => {
    setTechnologiesSelected(value);
  }

  const handleSubmit = async event => {
    event.preventDefault();
    var concactData = "";

    technologiesSelected.forEach((data) => {
      concactData = concactData + data['name'] +','
    })

    // Remove the comma at the end of the string
    concactData = concactData.slice(0, -1);
    await getNinjaName(concactData, handleSuccess, handleError, setLoading );
  };


  // First page loading
  useEffect(() => {
    (async () => {
      setLoadingTechnology(true);
     
      try {
        const res = await axios.get(`${baseUrl}/ninjify/technology`);
        setTechnologies(res.data);
        setTechnologiesLoaded(true);
      } catch (error) {
        alert("Error Loading Posts");
      }

      setLoadingTechnology(false);
    })();
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4">
            Ninja name generator
          </Typography>
          <Avatar  sx={{ m: 2, bgcolor: 'secondary.main', height: '100px', width: '100px' }}>
            <img src='https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3170766/ninjas-clipart-sm.png' alt="Logo"/>
          </Avatar>
          {ninjaName ? 
          (  
            <>     
            <Typography component="h1" variant="h5">
              Your ninja name is :
            </Typography>
            <Typography component="h1" variant="h6">
              {ninjaName}
            </Typography>
            </> 
          )
            : ''
          }

          {loading ? <Loading/> : ''}

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {loadingTechnology ? <Loading/> : ''}
          {technologiesLoaded ? <BuzzwordInput technologies={technologies} handleChange={handleChange}/>: ''}  

          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
          >
            Generate
          </Button>
          </Box>
        </Box>
        <Footer sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}