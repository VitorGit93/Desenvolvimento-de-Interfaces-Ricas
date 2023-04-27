import Avatar from '@mui/material/Avatar';

type AvatarPicProps = {
    imageUrl: string;
}

export function AvatarPic({ imageUrl }: AvatarPicProps) {
    return (
        <Avatar
            alt="User avatar"
            src={imageUrl}
            sx={{ width: 100, height: 100 }}
        />
    );
}