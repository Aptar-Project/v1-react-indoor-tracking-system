import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useDispatch } from "react-redux";
import { accountActions } from "../../features/account/accountSlice";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const handleChangeEmail = (e) => {
    dispatch(accountActions.setEmail(e.target.value));
  };

  const handleChangePwd = (e) => {
    dispatch(accountActions.setPwd(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(accountActions.accountLogin());
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <div>
        <TextField
          required
          id="outlined-adornment"
          label="Required"
          defaultValue="Hello Worssld"
          variant="standard"
          onChange={handleChangeEmail}
        />
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id=""
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          onChange={handleChangePwd}
          label="Password"
        />
        <br />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </div>
    </Box>
  );
};
