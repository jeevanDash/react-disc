import { useContext, useState } from "react";
import { Box, TextField, Button, Alert } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PasswordIcon from "@mui/icons-material/Password";
import { PollContext } from "../../context/poll-context";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const { isUserLogin, setIsUserLogin, verifyUserHandler } =
    useContext(PollContext);
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserPassword, setInputUserPassword] = useState("");

  return (
    <div className={styles.loginSection}>
      <div className={styles.subLoginSection}>
        <div className={styles.loginTextSection}>
          <h1 className={styles.subLoginSectionHeader}>Login Page</h1>
        </div>
        <div className={styles.inputSection}>
          <Box sx={{ display: "flex", alignItems: "flex-end", m: 4 }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="text"
              id="input-username"
              label="user name"
              variant="standard"
              value={inputUserName}
              onChange={(e) => {
                setInputUserName(e.target.value);
                setIsUserLogin(true);
              }}
              fullWidth
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "flex-end", m: 4 }}>
            <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="password"
              id="input-password"
              label="password"
              variant="standard"
              value={inputUserPassword}
              onChange={(e) => {
                setInputUserPassword(e.target.value);
                setIsUserLogin(true);
              }}
              fullWidth
            />
          </Box>
          <Button
            variant="outlined"
            sx={{ m: 4 }}
            onClick={() => verifyUserHandler(inputUserName, inputUserPassword)}
          >
            Login
          </Button>
          {!isUserLogin && (
            <Alert severity="error">
              Username or password wrong. Try like username:amar and
              password:amar123
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
