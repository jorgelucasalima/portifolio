import { Avatar, Box, Card, Flex, Link, Text } from "@radix-ui/themes";


export default function Contacts() {

  const listImagens = [
    {
      id: 1,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
      alt: "Linkedin",
    },
    {
      id: 2,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
      alt: "Google",
    },
    {
      id: 3,
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "Github",
    },
  ]


  return (
    <Flex direction="column" gap="4" align="center">
      <Box maxWidth="440px">
        <Card size="3">
          <Link href="https://www.linkedin.com/in/jorgelucaslima/" target="_blank">
            <Flex gap="3" align="center">
              <Avatar
                size="5"
                src={listImagens[0].src}
                radius="medium"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Linkedin
                </Text>
                <Text as="div" size="2" color="gray">
                  in/jorgelucaslima
                </Text>
              </Box>
            </Flex>
          </Link>
        </Card>

        <Card size="3" style={{ marginTop: '10px' }}>
          <Link href="jorgelucasalima@gmail.com" target="_blank">
            <Flex gap="3" align="center">
              <Avatar
                size="5"
                src={listImagens[1].src}
                radius="medium"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Gmail
                </Text>
                <Text as="div" size="2" color="gray">
                  jorgelucasalima@gmai.com
                </Text>
              </Box>
            </Flex>
          </Link>
        </Card>

        <Card size="3" style={{ marginTop: '10px' }}>
          <Link href="https://github.com/jorgelucasalima" target="_blank">
            <Flex gap="3" align="center">
              <Avatar
                size="5"
                src={listImagens[2].src}
                radius="medium"
                fallback="T"
              />
              <Box>
                <Text as="div" size="2" weight="bold">
                  Github
                </Text>
                <Text as="div" size="2" color="gray">
                   jorgelucasalima
                </Text>
              </Box>
            </Flex>
          </Link>
        </Card>

      </Box>
    </Flex>
  )
}