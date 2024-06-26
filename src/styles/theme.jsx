const { grey, teal } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          favColour: { main: grey[300] },
          textColour: { main: teal[200] },
        }
      : {
          favColour: { main: grey[700] },
          textColour: { main: teal[600] },
        }),
  },
});
export default getDesignTokens;
