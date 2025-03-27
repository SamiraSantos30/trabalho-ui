import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box, Typography } from "@mui/material";
import Telas from "./components/Tela"; 

const App = () => {
  const [dados, setDados] = useState([]);
  
  // Função para pegar os dados da API
  const pergarDados = async () => {
    try {
      console.log("Tentando buscar dados...");
      const resposta = await axios.get("https://rickandmortyapi.com/api/character");
      console.log("Dados recebidos:", resposta.data.results); // Verificando a resposta
      if (resposta.data && resposta.data.results) {
        setDados(resposta.data.results);
      } else {
        console.error("Nenhum dado encontrado.");
      }
    } catch (erro) {
      console.error("Erro na busca de dados:", erro);
    }
  };

  // Usando useEffect para buscar os dados ao montar o componente
  useEffect(() => {
    console.log("Tentando buscar dados...");
    pergarDados();
  }, []);

  return (
    <Container style={{ textAlign: "center", padding: "3rem" }}>
      <Typography variant="h1" gutterBottom>
        Rick and Morty
      </Typography>
      <Box sx={{ display: "1", flexWrap: "wrap", justifyContent: "center" }}>
        {dados.length > 0 ? (
          dados.map((personagem) => {
            console.log(personagem); // Verificando os dados de cada personagem
            return (
              <Box key={personagem.id} sx={{ width: { xs: "100%", sm: "48%", md: "30%" }, marginBottom: 2 }}>
                <Telas personagem={personagem} />
              </Box>
            );
          })
        ) : (
          <Typography variant="h6" sx={{ color: "gray" }}>
            Carregando dados...
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default App;
