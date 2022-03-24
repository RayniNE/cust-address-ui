import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";

const App: React.FC<any> = () => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={(event) => console.log(event)}>
          <CardContent>
            <Typography variant="h5" component="div">
              Rayni Nunez Espino
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default App;
