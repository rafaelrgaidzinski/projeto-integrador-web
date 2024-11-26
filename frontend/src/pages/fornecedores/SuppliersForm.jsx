import { Box, Button, TextField, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Header from "../../components/Header";


const ClientsForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m={"30px"}>
            <Header title={"Cadastro de Fornecedores"}/>
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="40px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, mt:"60px"} }>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Fornecedor"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.supplier}
                                name="supplier"
                                error={!!touched.supplier && !!errors.supplier}
                                helperText={touched.supplier && errors.supplier}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="CNPJ"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.cnpj}
                                name="cnpj"
                                error={!!touched.cnpj && !!errors.cnpj}
                                helperText={touched.cnpj && errors.cnpj}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Responsável"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.inCharge}
                                name="inCharge"
                                error={!!touched.inCharge && !!errors.inCharge}
                                helperText={touched.inCharge && errors.inCharge}
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
                                label="Formas de Pagamento"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.payment}
                                name="payment"
                                error={!!touched.payment && !!errors.payment}
                                helperText={touched.payment && errors.payment}
                                sx={{ gridColumn: "span 3" }}
                            />
                             <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Prazo de Entrega"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.delivery}
                                name="delivery"
                                error={!!touched.delivery && !!errors.delivery}
                                helperText={touched.delivery && errors.delivery}
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
                        <Box display="flex" justifyContent="end" mt="60px" sx={{"& .MuiButtonBase-root:hover": { backgroundColor: `${colors.blueAccent[600]} !important` }}}>
                            <Button type="submit" variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "200px", mb:"30px"}}>
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
    street: "",
    number: "",
    cep: "",
    city: "",
    district: "",
    uf: ""
};

export default ClientsForm;