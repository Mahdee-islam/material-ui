import AlarmIcon from '@mui/icons-material/Alarm';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button, ButtonGroup, Checkbox, createTheme, Grid, IconButton, Paper, TextField } from '@mui/material';
import { orange } from '@mui/material/colors';
import { ThemeProvider } from 'styled-components';
import './App.css';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function CheckBoxExample() {
  return (
    <div style = {{ border: '2px solid green'}}>
       <h1>This is checkbox</h1>
       <h2>lorem</h2>
       <div>
      <Checkbox {...label} icon={<FavoriteBorder />} color= "warning" checkedIcon={<Favorite />} />
      <Checkbox 
      color = "secondary"
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
    </div>
  )
}
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
   
  },
});
function App() {
  return (
    <ThemeProvider theme = {theme} >
      <div className="App">
      <CheckBoxExample/>
      <br/>
      <div style = { { border : '2px solid red'}} >
      <h2>This is Button</h2>
      <ButtonGroup variant = "contained">
      <Button onClick = {() => alert('save successfully')} startIcon = { <SaveIcon/> }   >Save</Button>
      <br/>
      <Button onClick = {() => alert('delete successfully')} startIcon = { <DeleteIcon/> }   >Delete</Button>
      <br/>
      <Button onClick = {() => alert('sent successfully')} endIcon = { <SendIcon/> }   >Send</Button>
      </ButtonGroup>
      <IconButton aria-label="delete">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
  </IconButton>
      </div>
      <div>
      <TextField id="standard-basic" label="Search" variant="filled" />
      </div>
    </div>
    <Grid container spacing = { 2 }  justifyContent="center">
      <Grid item xs={3} md = {6} lg = {12}>
        <Paper style= {{
         height: '50%',
         width: "50%",
        }}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ratione velit, ad omnis qui dolor dignissimos, libero repellat animi sunt illum eos enim voluptates eaque rerum neque quo! Dolores, enim!</p>
        </Paper>
      </Grid>
      <Grid item xs={3} md = {6} lg = {12}>
        <Paper style= {{
          height: '50%',
          width: "50%",
        }}>
          <p>lorem</p>
        </Paper>
      </Grid>
      <Grid item xs={3} md = {6} lg = {12}>
        <Paper style= {{
          height: '50%',
          width: "50%",
        }}>
          <p>lorem</p>
        </Paper>
      </Grid>
    </Grid>
    </ThemeProvider>
  );
}

export default App;
