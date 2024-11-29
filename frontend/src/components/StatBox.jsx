import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 20px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h3"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        {progress && (
            <Box>
              <ProgressCircle progress={progress} />
            </Box>     
        )}
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography fontSize={"18px"} sx={{ color: colors.greenAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          fontSize={"18px"}
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
