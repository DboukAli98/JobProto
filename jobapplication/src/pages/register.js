import React from 'react';

import SignUpContainer from "../components/Register/SignUpContainer.js"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import '..//index.css';

const Register = () => (
  <MuiThemeProvider>
    <SignUpContainer />
  </MuiThemeProvider>
);

export default Register;