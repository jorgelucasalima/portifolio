import { Box, Card, Flex, TabNav, Text, Avatar } from "@radix-ui/themes";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {


  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Flex direction="column" gap="4" align="center">
      <Box maxWidth="240px" style={{ marginTop: '10px' }}>
        <Card>
          <Flex gap="3" align="center">
            <Avatar
              size="4"
              src="https://avatars.githubusercontent.com/u/47228656?v=4"
              radius="full"
              fallback="T"
            />
            <Box>
              <Text as="div" size="2" weight="bold">
                Jorge Lima
              </Text>
              <Text as="div" size="2" color="gray">
                Fullstack Developer
              </Text>
            </Box>
          </Flex>
        </Card>
      </Box>

      <TabNav.Root>
        <TabNav.Link asChild active={pathname === '/'}>
          <Link to="/about">Inicio</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/projects'}>
          <Link to="/projects">Projetos</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/works'}>
          <Link to="/works">Trabalhos</Link>
        </TabNav.Link>
        <TabNav.Link asChild active={pathname === '/contacts'}>
          <Link to="/contacts">Contato</Link>
        </TabNav.Link>
      </TabNav.Root>
    </Flex>
    
  )
}