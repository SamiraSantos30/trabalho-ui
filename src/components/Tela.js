import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Telas({ personagem }) {
  return (
    <Card
      sx={{
        borderRadius: 2,
        backgroundColor: "#0b002e",
        textAlign: "left",
        minWidth: 290,
        padding: 2,
      }}
    >
      <CardContent>
        <img
          src={personagem.image}
          alt={personagem.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <Typography variant="h6" sx={{ color: "white", marginTop: 1 }}>
          {personagem.name}
        </Typography>
        <Typography sx={{ color: "white" }}>Espécie: {personagem.species}</Typography>
        <Typography sx={{ color: "white" }}>Origem: {personagem.origin.name}</Typography>
        <Typography sx={{ color: "white" }}>Gênero: {personagem.gender}</Typography>
        <Typography sx={{ color: "white" }}>Status: {personagem.status}</Typography>
      </CardContent>
    </Card>
  );
}
