import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import {Divider} from "@mui/material";
import { AvatarPic } from '../Avatar';


export function UserCard() {
    return (
        <Card sx={{ minWidth: 275 }} >

            <CardContent>

                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', pb: 0, mb: { xs: 0, md: 0 } }}>
                        <AvatarPic />
                    </Box>
                    <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ fontSize: 22, ml: { xs: 0, md: 2 } }} color="black">
                            Nome do perfil no Github
                        </Typography>

                    </CardContent>

                </Box>

                <Divider sx={{ my: 2 }} />

            </CardContent>

            <CardActions>
                <Button size="medium">Ver repositórios</Button>
            </CardActions>
        </Card>
    )
}