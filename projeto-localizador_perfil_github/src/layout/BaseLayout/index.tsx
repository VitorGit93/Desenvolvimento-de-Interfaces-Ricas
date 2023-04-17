import { AppBar, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import SearchAppBar from "../../components/SearchBar";
type BaseLayoutProps = {
    children: React.ReactNode;
    appBarTitle: string;
};
export function BaseLayout({ children, appBarTitle }: BaseLayoutProps) {
    return (
        <>

            <SearchAppBar></SearchAppBar>

            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                padding={2}
                mt={10}
                sx={{
                    bgcolor: "palette.background.default",
                    width: "100%",
                }}
                minHeight={100}
            >
                {children}
            </Box>


        </>
    );
}