import { Box, Button, TextField, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Header from "../../components/Header";


const EmployeesForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m={"10px 20px 0 20px"}>
            <Header title={"Cadastro de Funcionários"}/>
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="27px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, mt:"40px"} }>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Nome"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="CPF"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.cpf}
                                name="cpf"
                                error={!!touched.cpf && !!errors.cpf}
                                helperText={touched.cpf && errors.cpf}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Data de Contratação"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.hiredate}
                                name="hiredate"
                                error={!!touched.hiredate && !!errors.hiredate}
                                helperText={touched.hiredate && errors.hiredate}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="E-mail"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Telefone"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                error={!!touched.phone && !!errors.phone}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Cargo"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.role}
                                name="role"
                                error={!!touched.role && !!errors.role}
                                helperText={touched.role && errors.role}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Salário"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.salary}
                                name="salary"
                                error={!!touched.salary && !!errors.salary}
                                helperText={touched.salary && errors.salary}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Rua"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.street}
                                name="street"
                                error={!!touched.street && !!errors.street}
                                helperText={touched.street && errors.street}
                                sx={{ gridColumn: "span 3" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Número"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.number}
                                name="number"
                                error={!!touched.number && !!errors.number}
                                helperText={touched.number && errors.number}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Bairro"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.district}
                                name="district"
                                error={!!touched.district && !!errors.district}
                                helperText={touched.district && errors.district}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="CEP"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.cep}
                                name="cep"
                                error={!!touched.cep && !!errors.cep}
                                helperText={touched.cep && errors.cep}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Cidade"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.city}
                                name="city"
                                error={!!touched.city && !!errors.city}
                                helperText={touched.city && errors.city}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="UF"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.uf}
                                name="uf"
                                error={!!touched.uf && !!errors.uf}
                                helperText={touched.uf && errors.uf}
                                sx={{ gridColumn: "span 1" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="30px" sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                            <Button type="submit" variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "200px"}}>
                                <SaveOutlinedIcon sx={{ mr: "10px" }} />
                                Salvar
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    cpf: yup.string().required("Campo obrigatório"),
    phone: yup.string().matches(phoneRegExp, "Número de telefone inválido").required("Campo obrigatório"),
    email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
    hiredate: yup.string().required("Campo obrigatório"),
    salary: yup.string().required("Campo obrigatório"),
    role: yup.string().required("Campo obrigatório"),
    street: yup.string().required("Campo obrigatório"),
    number: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    district: yup.string().required("Campo obrigatório"),
    uf: yup.string().required("Campo obrigatório")
});

const initialValues = {
    name: "",
    cpf: "",
    phone: "",
    email: "",
    hiredate: "",
    salary: "",
    role: "",
    street: "",
    number: "",
    cep: "",
    city: "",
    district: "",
    uf: ""
};

export default EmployeesForm;