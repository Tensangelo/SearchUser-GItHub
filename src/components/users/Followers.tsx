// Mui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


type FollowersProps = {
    Followers: object | number;
}

const Followers = (dataFollowers: FollowersProps) => {
    let ListDataFollower = Object.values(dataFollowers.Followers);

    return (
        <List dense sx={{ width: '100%' }}>
            {ListDataFollower.map((data: any) => {
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

export default Followers;