import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography, Link } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hook";

const formData = {
  email: "toro@gmail.com",
  password: "123456",
  displayName: "Toro",
};

const formValidations = {
  email: [
    (value) => value.includes("@"),
    "El correo debe tener un @",
    (value) => /\.(com|es|mx|org|do|co)$/.test(value),
    "El correo debe terminar en .com, .es o .mx",
  ],
  password: [
    (value) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value),
    "El password debe tener al menos una mayúscula, una minúscula, un número, un símbolo y mínimo 8 caracteres",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio"],
};

export const RegisterPage = () => {
  const {
    //para manejar el formulario
    formState,
    displayName,
    email,
    password,
    onInputChange,
    //para validar el formulario
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onsubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return (
    <AuthLayout title="Registro">
      <h1>FormValid: {isFormValid ? "Valido" : "Invalido"}</h1>
      <form onSubmit={onsubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nickname"
              type="text"
              placeholder="Escribe tu nombre"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@gmail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!displayNameValid}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta, papá? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
