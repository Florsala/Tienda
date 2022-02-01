import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import cartContext from "../context/cartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/firebase";
import { getFirestore } from "firebase/firestore";
import { Typography } from "@mui/material";

export default function FormPropsTextFields() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [hotel, setHotel] = useState("");

  const [orderId, setOrderId] = useState("");
  const [finCompra, setFinCompra] = useState(false);

  const { cart, addTotal } = useContext(cartContext);

  const total = addTotal();
  const buyingDate = new Date();

  const enviarDatos = () => {
    setFinCompra(true);

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
          defaultValue="@"
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
          value={hotel}
          onChange={(event) => setHotel(event.target.value)}
        />
        <TextField
          id="standard-required"
          label="Teléfono"
          variant="standard"
          value={telefono}
          onChange={(event) => setTelefono(event.target.value)}
        />
      </div>
      <Button
        onClick={enviarDatos}
        color="secondary"
        variant="contained"
        m={5}
        size="small"
      >
        Enviar datos
      </Button>

      {finCompra && (
        <Box m={3}>
          <Typography p={5} variant="h4">
            Gracias por tu compra!
          </Typography>
          <Typography p={3} variant="h6">
            Tu iD de compra es {orderId}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
