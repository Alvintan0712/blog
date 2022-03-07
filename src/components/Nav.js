import React from "react";
import { Avatar, Grid, GridItem, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"


function Nav() {
  return (
		<Grid templateColumns='repeat(10,1fr)' gap={6} boxShadow='md'>
			<NavItem child='Home' href='/' px={8} py={5} />
			<GridItem colSpan={2}></GridItem>
			<SearchBar />
			<GridItem colSpan={2}></GridItem>
			<NavItem child={<Avatar size='md' src="https://avatars.githubusercontent.com/u/44645263?v=4" ml={12} mr={3} />} href='#' px={3} py={2} />
		</Grid>
	)
}


function NavItem(props) {
	return (
		<GridItem w='100%' px={props.px} py={props.py}>
			<Text as='a' href={props.href} textDecoration='none'>{props.child}</Text>
		</GridItem>
	)
}


function SearchBar() {
	return (
		<GridItem w='100%' colSpan={4} py={3}>
			<InputGroup>
				<InputLeftElement 
					pointerEvents='none' 
					children={<Search2Icon color='gray.300' />}
				/>
				<Input placeholder="Search Content" />
			</InputGroup>
		</GridItem>
	)
}


export default Nav;