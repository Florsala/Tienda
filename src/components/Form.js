import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cartContext from "../context/cartContext";
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";

export default function FormPropsTextFields() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [hotel, setHotel] = useState("");
  const [credit, setCredit] = useState('');
  const [credNumer, setCredNumber] = useState('');
  const [expire, setExpire] = useState('');
  const [code, setCode] = useState('');



  const handleChange = (event) => {
    setCredit(event.target.value);
  };

  const [orderId, setOrderId] = useState("");
  const [finCompra, setFinCompra] = useState(false);

  const { cart, addTotal, clearCart } = useContext(cartContext);

  const total = addTotal();
  const buyingDate = new Date();

  const enviarDatos = () => {
    setFinCompra(true);
    clearCart();

    const nuevaOrden = {
      buyer: {
        nombre: nombre,
        email: email,
        direccion: direccion,
        telefono: telefono,
      },

      items: {
        cart: [...cart],
      },

      date: {
        fecha: buyingDate.toLocaleString(),
      },

      total: {
        total: total,
      },
    };

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, nuevaOrden)
      .then(({ id }) => {
        setOrderId(id);
        setNombre("");
        setEmail("");
        setDireccion("");
        setTelefono("");
        setHotel("");
        setCredit("");
        setExpire("");
        setCredNumber("");
        setCode("");

      
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Box
      m={15}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 3, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="standard-required"
          type="text"
          label="Nombre"
          autoComplete="Nombre"
          variant="standard"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />
        <TextField
          id="standard-required"
          type="text"
          label="E-mail"
          autoComplete="E-mail"
          variant="standard"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          id="standard-required"
          label="Direccion"
          type="address"
          autoComplete="Dirección"
          variant="standard"
          value={direccion}
          onChange={(event) => setDireccion(event.target.value)}
        />
        <TextField
          id="standard"
          type="text"
          label="Alojamiento"
          autoComplete="Alojamiento"
          variant="standard"
          helperText="Hotel donde estará alojado"
          title="Si aún no sabe dónde estará alojado puede informarlo luego"
          value={hotel}
          onChange={(event) => setHotel(event.target.value)}
        />
        <TextField
          id="standard-required"
          type="tel"
          label="Teléfono"
          variant="standard"
          value={telefono}
          pattern="\([0-9]{3}\) [0-9]{3}[ -][0-9]{4}"
          title="Inserte su número con código de área" required
          onChange={(event) => setTelefono(event.target.value)}
        />
         
 <div >

   

 <FormControl sx={{ m: 3,  minWidth: 180 }}>
        <InputLabel id="demo-simple-select-label">Tarjeta de crédito</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="standard-required"
          value={credit}
          label="Tarjeta de crédito"
           onChange={handleChange} 
        >
          <MenuItem value={1}>Visa</MenuItem>
          <MenuItem value={2}>MasterCard</MenuItem>
          <MenuItem value={3}>American Express</MenuItem>
        </Select>
      </FormControl>
       
            
            <TextField 
            type="text" 
            label ="número de tarjeta" 
            
            id="standard"
            value={credNumer}
            placeholder="0000 0000 0000 0000" 
            title="Inserte su número de tarjeta de crédito" 
            onChange={(event) => setCredNumber(event.target.value)}
            />

                 
         
          <TextField 
          
             type="text" 
            label ="Vencimiento" 
            id="Vencimiento" 
            value={expire}
            placeholder="00/00/0000" 
            title="Inserte su número de tarjeta de crédito" required
            onChange={(event) => setExpire(event.target.value)}
            />

            
          
          
          <TextField 
            type="text" 
            label ="Cod. seguridad" 
            id="Cod. seguridad"
            value={code} 
            placeholder="" 
            title="Inserte el código de seguridad" required
            onChange={(event) => setCode(event.target.value)}/>

            
          </div>
        
        
      </div>
      <Button
      disabled={
        !nombre || !direccion || !email  || !telefono 
      }
        onClick={enviarDatos}
        color="secondary"
        variant="contained"
        m={5}
        size="small"
      >
        Enviar datos
      </Button>

      {finCompra && (
        <Box m={5} className="finCompra">
          <Typography p={5} variant="h5">
            Gracias por tu compra!
          </Typography>
          <Typography p={3} variant="body1">
            Tu iD de compra es {orderId}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
