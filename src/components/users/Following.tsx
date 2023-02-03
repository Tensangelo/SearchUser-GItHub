// Mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


type FollowingProps = {
    Following: object | number;
}

const Following = (dataFollowing: FollowingProps) => {
    let ListDataFollowing = Object.values(dataFollowing.Following);

    return (
        <List dense sx={{ width: '100%' }}>
            {ListDataFollowing.map((data: any) => {
                const { id, login, avatar_url } = data;

                return (
                    <ListItem
                        key={id}
                        disablePadding
                        sx={{
                            mt: '10px'
                        }}
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={'Avatar Follower'}
                                    src={avatar_url}
                                />
                            </ListItemAvatar>
                            <ListItemText id={id} primary={login} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    )
}

export default Following;