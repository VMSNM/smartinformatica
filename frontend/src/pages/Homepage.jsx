import { Colors } from "../styles/theme";
import { BodyText, LoadingBox } from '../styles/main';
import LayoutTitle from '../layouts/common/LayoutTitle';
import QuickNotes from "../components/quick-notes/QuickNotes";
import { useAuthContext } from "../context/AuthContext";
import { CircularProgress } from "@mui/material";

const Homepage = () => {
  const {authUser} = useAuthContext();
  if (!authUser) return <LoadingBox><CircularProgress /></LoadingBox>

  return (
  <>
    <LayoutTitle title={'Smart Informática '} titleSpan={' Management Panel'} />
    <BodyText variant='body1' mb={2} mt={4}>
      Check out your <span style={spanStyle}>Quick Notes</span> below:
    </BodyText>
    <QuickNotes />
  </>
  )
}

export default Homepage;

const spanStyle = {
  color: Colors.primary, 
}