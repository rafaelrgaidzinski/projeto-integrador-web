import * as React from 'react';
import { Box, Button, useTheme} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik } from "formik";
import { tokens } from "../theme";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const ProductDialog = ({ open, handleClickOpen, handleClose }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
    handleClose();
}

  return (
      <Dialog open={open} sx={{'& .MuiDialog-paper': { borderRadius: '15px', backgroundColor: colors.grey[900]},
      }}>
        <DialogTitle sx={{fontSize: "18px"}}>Adicionar Produto</DialogTitle>
        <DialogContent >
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, mt:"30px"} }>
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
                              sx={{ gridColumn: "span 4" }}
                          />
                          <TextField
                              fullWidth
                              variant="filled"
                              type="number"
                              label="Quantidade"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.quantity}
                              name="quantity"
                              error={!!touched.quantity && !!errors.quantity}
                              helperText={touched.quantity && errors.quantity}
                              sx={{ gridColumn: "span 4" }}
                          />
                      </Box>
                      <Box>
                        <Button onClick={handleClose} variant="contained" sx={{backgroundColor: colors.redAccent[500], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", m:"60px 15px 0 0"}}>
                            <CancelOutlinedIcon sx={{ mr: "10px" }} />
                            Cancelar
                        </Button>
                        <Button type="submit" variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", m:"60px 0 0 15px"}}>
                            <AddShoppingCartOutlinedIcon sx={{ mr: "10px" }} />
                            Adicionar
                        </Button>
                      </Box>
                  </form>
              )}
          </Formik>
        </DialogContent>
      </Dialog>
  );
}

const userSchema = yup.object().shape({
  product: yup.string().required("Campo obrigatório"),
  quantity: yup.string().required("Campo obrigatório"),
});

const initialValues = {
  product: "",
  quantity: "",
};

export default ProductDialog;