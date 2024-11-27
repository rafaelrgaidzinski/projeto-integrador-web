import { Box, Button, TextField, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Header from "../../components/Header";


const ProductsForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <Box m={"30px"}>
            <Header title={"Cadastro de Produtos"}/>
            <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="40px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, mt:"60px"} }>
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Produto"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.product}
                                name="product"
                                error={!!touched.product && !!errors.product}
                                helperText={touched.product && errors.product}
                                sx={{ gridColumn: "span 2" }}
                            />
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
                                type="number"
                                label="Código de Barra"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.barCode}
                                name="barCode"
                                error={!!touched.barCode && !!errors.barCode}
                                helperText={touched.barCode && errors.barCode}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Preço de Compra"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.purchaseprice}
                                name="purchaseprice"
                                error={!!touched.purchaseprice && !!errors.purchaseprice}
                                helperText={touched.purchaseprice && errors.purchaseprice}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="number"
                                label="Preço de Venda"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.salesprice}
                                name="salesprice"
                                error={!!touched.salesprice && !!errors.salesprice}
                                helperText={touched.salesprice && errors.salesprice}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Categoria"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.category}
                                name="category"
                                error={!!touched.category && !!errors.category}
                                helperText={touched.category && errors.category}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Programa Farmácia Popular"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.freeprogram}
                                name="freeprogram"
                                error={!!touched.freeprogram && !!errors.freeprogram}
                                helperText={touched.freeprogram && errors.freeprogram}
                                sx={{ gridColumn: "span 1" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                type="text"
                                label="Receita"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.recipe}
                                name="recipe"
                                error={!!touched.recipe && !!errors.recipe}
                                helperText={touched.recipe && errors.recipe}
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

const userSchema = yup.object().shape({
    product: yup.string().required("Campo obrigatório"),
    laboratory: yup.string().required("Campo obrigatório"),
    barCode: yup.string().required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    freeprogram: yup.string().required("Campo obrigatório"),
    recipe: yup.string().required("Campo obrigatório"),
});

const initialValues = {
    product: "",
    laboratory: "",
    barCode: "",
    price: "",
    category: "",
    freeprogram: "",
    recipe: ""
};

export default ProductsForm;