import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Checklist from "./components/checklist/Checklist";

function App() {
  return (
    <BrowserRouter basename="/widgettest">

      <Box display="flex" flexDirection="column" height="100%">
        <Box p={4} fontSize="2rem">
          Checklist
        </Box>
        <Box flex="1 1" p={4}>
          <Checklist />
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
