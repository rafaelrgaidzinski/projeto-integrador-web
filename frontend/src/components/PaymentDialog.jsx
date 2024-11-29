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
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const PaymentDialog = ({ open, handleClickOpen, handleClose, page }) => {
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
        <DialogTitle sx={{fontSize: "18px"}}>Efetuar Pagamento</DialogTitle>
        <DialogContent >
        <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                      <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }, mt:"30px"} }>
                        {page == "clientes" ? (
                                <TextField
                                    fullWidth
                                    variant="filled"
                                    type="text"
                                    label="Cliente"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.client}
                                    name="client"
                                    error={!!touched.client && !!errors.client}
                                    helperText={touched.client && errors.client}
                                    sx={{ gridColumn: "span 4" }}
                                />
                            ) : (
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
                                    sx={{ gridColumn: "span 4" }}
                                />
                            )}
                    
                          <TextField
                              fullWidth
                              variant="filled"
                              type="number"
                              label="Forma de Pagamento"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.paymentmethod}
                              name="paymentmethod"
                              error={!!touched.paymentmethod && !!errors.paymentmethod}
                              helperText={touched.paymentmethod && errors.paymentmethod}
                              sx={{ gridColumn: "span 4" }}
                          />
                      </Box>
                      <Box>
                        <Button onClick={handleClose} variant="contained" sx={{backgroundColor: colors.redAccent[500], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", m:"60px 15px 0 0"}}>
                            <CancelOutlinedIcon sx={{ mr: "10px" }} />
                            Cancelar
                        </Button>
                        <Button type="submit" variant="contained" sx={{backgroundColor: colors.blueAccent[700], color: "#fff", fontSize: "14px", fontWeight: "bold", padding: "10px 20px", width: "250px", m:"60px 0 0 15px"}}>
                            <PaymentsOutlinedIcon sx={{ mr: "10px" }} />
                            Pagar
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

export default PaymentDialog;