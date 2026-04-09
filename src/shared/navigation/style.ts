import { styled } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import Stack from '@mui/material/Stack'

export const SideNavigation = styled(Drawer)(() => ({
  width: 240,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: 240,
    boxSizing: 'border-box',
  },
}))

export const NavigationHeader = styled(Stack)(() => ({
  
  p: 2,
  borderBottom: '1px solid #ddd',
  alignItems: 'center',
  justifyContent: 'center',
}))
