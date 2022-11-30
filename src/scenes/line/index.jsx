import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Pie = () => {

    return (
        <Box m="20px">
            <Header title="Line Chart" subtitle="Simple Pie Chart"/>
            <Box height="75vh">
                <LineChart /> 
            </Box>
        </Box>

    );
}
 
export default Pie;