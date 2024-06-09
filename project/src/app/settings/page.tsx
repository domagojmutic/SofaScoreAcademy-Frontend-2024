import Settings from '@/modules/settings/Settings'
import { Box } from '@kuma-ui/core'

export default function SettingsPage() {
  return (
    <>
      <Box gridColumnStart={[1, 1, 1, 2]}>
        <Settings />
      </Box>
    </>
  )
}
