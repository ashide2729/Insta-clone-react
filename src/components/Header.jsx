import React, { Component } from 'react';
import './_Header.css';

import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="items">
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
                        <Select
                            native
                            value={state.option}
                            onChange={handleChange}
                            label="Sort By"
                        >
                            <option aria-label="None" value="" />
                            <option value={"likes"}>Likes</option>
                            <option value={"timestamp"}>Date Uploaded</option>
                        </Select>
                    </FormControl>
                    <button type="button" class="btn btn-default btn-sm"></button>
                </div>
            </div>
        )
    }
}
