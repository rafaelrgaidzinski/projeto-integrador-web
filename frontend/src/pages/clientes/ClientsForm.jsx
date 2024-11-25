import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";


const ClientsForm = () => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m={"20px"}>
            <Header title={"Cadastro de Clientes"}/>
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
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
                                label="Data de Nascimento"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.birthdate}
                                name="birthdate"
                                error={!!touched.birthdate && !!errors.birthdate}
                                helperText={touched.birthdate && errors.birthdate}
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
                                sx={{ gridColumn: "span 2" }}
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
                        </Box>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
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
                                sx={{ gridColumn: "span 2" }}
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
                                sx={{ gridColumn: "span 4" }}
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
                                sx={{ gridColumn: "span 4" }}
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
                                sx={{ gridColumn: "span 4" }}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained"> Cadastrar Usuário </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    )
}

//const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const phoneRegExp = /^(?:(^\\+\\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\\d{4,5}).?(\\d{4})$/

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