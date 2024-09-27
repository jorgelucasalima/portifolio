import { Outlet } from "react-router-dom";
import { Theme, Flex, Grid } from '@radix-ui/themes';
import Header from "../components/Header";

import '../styles/index.css';

export default function Root() {
  return (
    <Theme radius="medium">
      <div className="radix-themes">
        <Grid gap="6">
          <Header />

          <div id="detail">
            <Outlet />
          </div>
        </Grid>
      </div>
    </Theme>
  )
}