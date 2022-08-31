import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { XButton, YButton, AButton, StartSelectButton,BButton } from './Buttons';


//from https://mui.com/material-ui/react-dialog/

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function KonamiCodeModal(props) {
  const [open, setOpen] = useState(false);
  const [inputCount, setInputCount] = useState(0);
  const [isCodeFound, setCodeFound] = useState(false);


  const code = { 
    0 : "up" , 
    1 : "up" ,
    2 : "down" ,
    3 : "down" ,
    4 : "left" ,
    5 : "right" ,
    6 : "left" ,
    7 : "right" ,
    8 : "b" ,
    9 : "a" ,
    10 : "start"
  };

  const checkInputOnClick = (value) => {
    // For each right input it increase the count by 1
    if(code[inputCount] === value){
      setInputCount(inputCount + 1);
    }
    else{
      setInputCount(0);
    }

  // The code has been cracked
  if(inputCount === 10){
    setInputCount(0);
    setCodeFound(true);
  }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography onClick={handleClickOpen} variant="body2" color="text.secondary" align="center" {...props}>
        {'Do you like retro games?'}
      </Typography>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            { isCodeFound ? 'Congratulation!' : 'Can you crack the code'}
        </BootstrapDialogTitle>
        
        <DialogContent dividers>
        {isCodeFound ? (<img src='https://c.tenor.com/CTpG8Qr1A_AAAAAd/rick-roll-rick-astley.gif' alt="rick"></img>) : 
        (
          <Grid container spacing={2} alignItems="center">
          <Grid item xs={6} md={3}>
            <XButton variant="contained" onClick={() => checkInputOnClick('x')}>X</XButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <YButton variant="containted" onClick={() => checkInputOnClick('y')}>Y</YButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <AButton variant="containted" onClick={() => checkInputOnClick('a')}>A</AButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <BButton variant="containted" onClick={() => checkInputOnClick('b')}>B</BButton> 
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('up')}>Up</StartSelectButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('down')}>Down</StartSelectButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('left')}>Left</StartSelectButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('right')}>Right</StartSelectButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('start')}>Start</StartSelectButton>
          </Grid>
          <Grid item xs={6} md={3}>
            <StartSelectButton variant="containted" onClick={() => checkInputOnClick('select')}>Select</StartSelectButton>
          </Grid>
        </Grid>
        )}

        </DialogContent>
        <DialogActions>
          <StartSelectButton autoFocus onClick={handleClose}>
            Close
          </StartSelectButton>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}