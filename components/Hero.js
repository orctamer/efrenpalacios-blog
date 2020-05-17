import React from 'react';
import {Hero, HeroBody, Image, Container, HeroFooter, Button, Tabs, TabList, TabLink, Title, Tab, Columns} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';

export default class extends React.Component {
  render() {
    return (
			<>
				<Hero
					style={{ background: "rgb(16, 16, 16)" }}
					isColor="dark"
					isSize="small"
				>
					<HeroBody>
						<Container hasTextAlign="centered" style={{marginTop: '1em'}}>
							<Columns isCentered>
								<Image
									style={{ border: "4px solid #ecc94b", margin: "0 auto" }}
									isSize="128x128"
									src="../logo.png"
								/>
							</Columns>
							<Title>Efren Palacios</Title>
							<Subtitle>Web Designer &amp; Programmer</Subtitle>
								<a href="../Efren_Palacios_Resume.pdf" target="_blank">
							<Button isColor="warning">
								<b>View Resume</b>
									<img
										style={{ marginLeft: "5px" }}
										width="25px"
										src="../img/icons/resume.svg"
										alt=""
									/>
							</Button>
								</a>
						</Container>
					</HeroBody>
					<HeroFooter>
						<Tabs isBoxed isFullWidth>
							<Container>
								<TabList>
									<Tab isActive>
										<TabLink>Home</TabLink>
									</Tab>
									<Tab>
										<TabLink>Projects</TabLink>
									</Tab>
									<Tab>
										<TabLink>About</TabLink>
									</Tab>
									<Tab>
										<TabLink>Contact</TabLink>
									</Tab>
								</TabList>
							</Container>
						</Tabs>
					</HeroFooter>
				</Hero>
			</>
		);
  }
}