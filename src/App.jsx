import { CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import './App.css';
import Cards from "./components/Cards";

export default function App() {
  const [data, setData] = useState(null);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(fetchData => {
        setTimeout(() => {
          setData(fetchData)
        }, 3000)
      })
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="app">
        {data ? <Cards cardsData={data.results} /> : <CircularProgress color="inherit" />}
      </div>
    </ThemeProvider>
  )
}
