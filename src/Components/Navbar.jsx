import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ImageSlider from "./slider/ImageSlider";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#10101E")}
        color={useColorModeValue("whiteAlpha.900")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("#1A1A33")}
        align={"center"}
        padding="10px"
        height={"80px"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            marginLeft={"25px"}
            src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            alt="Disney+&nbsp;Hotstar"
          />

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
            <Text
              fontSize={"xl"}
              color="#EEA600"
              fontWeight={"bold"}
              marginLeft="10px"
            >
              KiDS
            </Text>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"#1C5FDF"}
            href={"#"}
            _hover={{
              bg: "#4A84F3",
            }}
          >
            Subscribe
          </Button>
          <Button
            as={"a"}
            color="whiteAlpha.900"
            fontSize={"sm"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
          >
            LOGIN
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("whiteAlpha.900");
  const linkHoverColor = useColorModeValue("white");
  const popoverContentBgColor = useColorModeValue("#1A1A33");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={4}
                href={navItem.href ?? "#"}
                fontSize={"large"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={2}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("black") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            // transition={"all .3s ease"}
            _groupHover={{ color: "white" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
      <ImageSlider />
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "TV",
    children: [
      {
        label: "Mood Mix",

        href: "#",
      },
      {
        label: "Hotstar Spacial",

        href: "#",
      },
      {
        label: "Quick",

        href: "#",
      },
      {
        label: "Star Jalsha",

        href: "#",
      },
      {
        label: "StarPlus",

        href: "#",
      },
      {
        label: "Star Vijay",

        href: "#",
      },
      {
        label: "Star Bharat",

        href: "#",
      },
      {
        label: "Asianet",

        href: "#",
      },
      {
        label: "More....",

        href: "#",
      },
    ],
  },
  {
    label: "Movies",
    children: [
      {
        label: "Odia",

        href: "#",
      },
      {
        label: "Hindi",

        href: "#",
      },
      {
        label: "Bengali",

        href: "#",
      },
      {
        label: "Telgu",

        href: "#",
      },
      {
        label: "Malayalam",

        href: "#",
      },
      {
        label: "Tamil",

        href: "#",
      },
      {
        label: "Marathi",

        href: "#",
      },
      {
        label: "English",

        href: "#",
      },
      {
        label: "Kannada",

        href: "#",
      },
      {
        label: "Korean",

        href: "#",
      },
      {
        label: "Japanese",

        href: "#",
      },
    ],
  },
  {
    label: "Sports",
    children: [
      {
        label: "Cricket",

        href: "#",
      },
      {
        label: "Football",

        href: "#",
      },
      {
        label: "Hockey",

        href: "#",
      },
      {
        label: "Kabaddi",

        href: "#",
      },
      {
        label: "Martial Arts",

        href: "#",
      },
      {
        label: "American Football",

        href: "#",
      },
      {
        label: "Tennis",

        href: "#",
      },
      {
        label: "Khelo India",

        href: "#",
      },
      {
        label: "Formula E",

        href: "#",
      },
      {
        label: "Athletics",

        href: "#",
      },
    ],
  },

  {
    label: "Desney+",
    href: "#",
  },
];
