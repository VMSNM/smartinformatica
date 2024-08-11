import { IconButton, Stack } from "@mui/material";
import { MainAppbarContainer } from "../../../styles/root-layout/mainappbar";
import AccountButton from "./account-btn/AccountButton";
import DrawerButton from "./drawer-btn/DrawerButton";
import AppNameLogo from "./appNameLogo/AppNameLogo";
import Quotes from "./quotes/Quotes";
import SearchBoxClients from "./search/SearchBoxClients";

const MainAppbar = () => {
  return (
    <MainAppbarContainer>
      <Stack direction={'row'} gap={0} alignItems={'center'}>
        <DrawerButton />
        <AppNameLogo />
      </Stack>

      <SearchBoxClients />
      {/* <Quotes /> */}


      <IconButton>
        <AccountButton />
      </IconButton>
      
    </MainAppbarContainer>
  )
}

export default MainAppbar;