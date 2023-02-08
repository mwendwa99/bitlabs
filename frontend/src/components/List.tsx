import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";

interface ListItemProps {
  data: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const InteractiveList: React.FC<ListItemProps> = ({ data }) => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {data.map((item, index) => (
            <Box sx={{ m: 1 }} key={index}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <img
                    src={item.icon}
                    width={"100%"}
                    height={"100%"}
                    alt="icon"
                    style={{ maxWidth: "50px" }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      gutterBottom
                      align="left"
                      variant="h6"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography align="left" variant="body1" component="div">
                      {item.description}
                    </Typography>
                  }
                />
              </ListItem>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default InteractiveList;
