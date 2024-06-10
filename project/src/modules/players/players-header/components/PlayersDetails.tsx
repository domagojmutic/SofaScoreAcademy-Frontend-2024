import { Box, Flex, Text, Image, Grid } from '@kuma-ui/core'
import { Player } from '@/model/Backend'
import { ReactNode } from 'react'
import { getStandardCountryName } from '@/utils/country'
import iso3311a2 from 'iso-3166-1-alpha-2'
import { getDateString } from '@/utils/dateUtils'

interface PlayersDetailsProps {
  player: Player
}

export default function PlayersDetails({ player }: PlayersDetailsProps) {
  return (
    <>
      <Flex height="56px" alignItems="center" gap="spacings.lg">
        <Image src={`/api/team/${player.team.id}/image`} width={40} height={40} />
        <Text fontSize="fontSizes.sm" fontWeight="fontWeights.bold" lineHeight="16px">
          {player.team.name}
        </Text>
      </Flex>
      <Grid gridTemplateColumns="1fr 1fr 1fr" gap="spacings.xl">
        <PlayerDetailsCard title="Nationality">
          <Flex gap="4px" alignItems="center" justify="center">
            <Image
              src={`https://www.sofascore.com/static/images/flags/${iso3311a2
                .getCode(getStandardCountryName(player.country.name))
                ?.toLowerCase()}.png`}
              width="16px"
              height="16px"
              borderRadius="50%"
              borderColor="colors.onSurface.nLv4"
              borderWidth="1px"
              borderStyle="solid"
            />
            <Text as="h3" fontSize="fontSizes.sm" fontWeight="bold" color="colors.onSurface.nLv1">
              {player.country.name}
            </Text>
          </Flex>
        </PlayerDetailsCard>
        <PlayerDetailsCard title="Position">
          <Text
            fontSize="fontSizes.sm"
            color="colors.onSurface.nLv1"
            fontWeight="fontWeights.bold"
            lineHeight="16px"
            textAlign="center"
          >
            {player.position}
          </Text>
        </PlayerDetailsCard>
        <PlayerDetailsCard title={getDateString(new Date(player.dateOfBirth), '. ', false) + '.'}>
          <Text
            fontSize="fontSizes.sm"
            color="colors.onSurface.nLv1"
            fontWeight="fontWeights.bold"
            lineHeight="16px"
            textAlign="center"
          >
            {parseInt(
              getDateString(new Date(new Date().getTime() - new Date(player.dateOfBirth).getTime()), '', true, {
                year: true,
                day: false,
                month: false,
              })
            ) - 1970}
          </Text>
        </PlayerDetailsCard>
      </Grid>
    </>
  )
}

function PlayerDetailsCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Box bg="colors.secondaryHighlight" borderRadius={4} paddingTop="spacings.sm" paddingBottom="spacings.md">
      <Text
        fontSize="fontSizes.xs"
        color="colors.onSurface.nLv2"
        fontWeight="fontWeights.bold"
        lineHeight="16px"
        textAlign="center"
        marginBottom={4}
      >
        {title}
      </Text>
      {children}
    </Box>
  )
}
