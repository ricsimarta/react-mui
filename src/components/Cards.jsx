import { Card, CardContent, Typography, Box } from "@mui/material";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


export default function Cards({ cardsData }) {
  return (
    <div className="cards">
      {cardsData.map((cardData, index) =>
        <Box key={index} sx={{ maxWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>{cardData.species}</Typography>

              <Typography variant="h5">{cardData.name}</Typography>

              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                {cardData.gender} 
                {cardData.gender === "Male" ? <MaleIcon /> : <FemaleIcon />}
              </Typography>

              <Typography variant="body2">{cardData.status}</Typography>
            </CardContent>
          </Card>
        </Box>)
      }
    </div>
  )
}