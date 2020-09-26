import React from 'react';
import './App.css';
import Cards from './components/Cards';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import SortIcon from '@material-ui/icons/Sort';

function App() {

  const [value, setValue] = React.useState("");

  const handleChange = option => {
    setValue(option);
    console.log(option)
  };

  return (
    <div className="App">
      <div className="header">
        <div className="items">
          <InputLabel htmlFor="outlined-age-native-simple">Sort By  </InputLabel>
          <Select
            native
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            label="Sort By"
          >
            <option aria-label="None" value="" />
            <option value={"likes"}>Likes</option>
            <option value={"timestamp"}>Date Uploaded</option>
          </Select>
          <SortIcon className="sort-icon"></SortIcon>
        </div>
      </div>
      <Cards></Cards>
    </div>
  );
}

export default App;
