import { Box } from "@mui/material";

type FooterProps = {
    children: React.ReactNode;
};

export function FooterLayout({ children }: FooterProps) {
    return (
        <Box
            sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                bgcolor: 'palette.primary.main',
                color: 'palette.primary.contrastText',
                textAlign: 'center',
                padding: 2,
            }}
        >
            {children}
        </Box>
    );
}
