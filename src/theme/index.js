import { createTheme } from '@mui/material/styles';
import palette from './palette';
import overrides from './overrides';
import dimensions from './dimensions';

const theme = createTheme({
  palette,
  overrides,
  dimensions,
});

export default theme;