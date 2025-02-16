import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Skeleton from '@mui/joy/Skeleton';
import Stack from '@mui/joy/Stack';

export default function ImageSkeleton() {
  return (
    <div style={{"display":'flex' , "gap":"10px" , "justifyContent":"center"}}>
    <Stack spacing={2} useFlexGap sx={{ alignItems: 'center' }}>
      <Box sx={{ m: 'auto' }}>
        <AspectRatio variant="plain" sx={{ width: 300 }}>
          <Skeleton>
            <img
              src={
                'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              }
              alt=""
            />
          </Skeleton>
        </AspectRatio>
      </Box>
    </Stack>
    <Stack spacing={2} useFlexGap sx={{ alignItems: 'center' }}>
      <Box sx={{ m: 'auto' }}>
        <AspectRatio variant="plain" sx={{ width: 300 }}>
          <Skeleton>
            <img
              src={
                'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              }
              alt=""
            />
          </Skeleton>
        </AspectRatio>
      </Box>
    </Stack>
    <Stack spacing={2} useFlexGap sx={{ alignItems: 'center' }}>
      <Box sx={{ m: 'auto' }}>
        <AspectRatio variant="plain" sx={{ width: 300 }}>
          <Skeleton>
            <img
              src={
                'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              }
              alt=""
            />
          </Skeleton>
        </AspectRatio>
      </Box>
    </Stack>
    <Stack spacing={2} useFlexGap sx={{ alignItems: 'center' }}>
      <Box sx={{ m: 'auto' }}>
        <AspectRatio variant="plain" sx={{ width: 300 }}>
          <Skeleton>
            <img
              src={
                'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
              }
              alt=""
            />
          </Skeleton>
        </AspectRatio>
      </Box>
    </Stack>
    </div>
  );
}
