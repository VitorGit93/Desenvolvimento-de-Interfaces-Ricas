import Box from "@mui/material/Box";
import React from "react";
import {CabecalhoHeader} from "../../components/CabecalhoHeader";
import {SearchBar} from "../../components/SearchBar";

type BaseLayoutProps = {
    children: React.ReactNode;
    appBarTitle: string;
};
export function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <>
            <CabecalhoHeader/>

            <SearchBar/>

            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                padding={0}
                mt={5}
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