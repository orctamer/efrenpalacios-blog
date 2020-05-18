import React from 'react';

export default class extends React.Component {
  render() {
    return (
			<>
				<div className="py-6 flex justify-center items-center flex-col sm:flex-row">
					<img
						className="h-32 border-solid border-yellow-400 border-4 w-32"
						src="../logo.png"
					/>
					<div className="sm:ml-4 mt-4 sm:mt-0 sm:justify-center flex flex-col items-center sm:items-start">
						<h1 className="text-5xl leading-10 tracking-tight font-semibold upper text-yellow-400">
							Efren Palacios
						</h1>
						<h2 className="uppercase font-semibold text-sm text-white">
							&nbsp;Web Designer &amp; Programmer
						</h2>
					</div>
				</div>
				<div className="flex sm:flex-row flex-col justify-center items-center">
					<a target="_blank" href="./Efren_Palacios_Resume.pdf">
						<button
							className="mt-8 sm:ml-2 bg-yellow-500 hover:bg-yellow-300
							text-gray-900 font-bold py-2 px-4 rounded outline-none flex justify-center items-center"
							style={{ minWidth: "200px" }}
						>
							View Resume{" "}
							<img
								width="25px"
								src="/img/icons/resume.svg"
								alt=""
								className="ml-4"
							/>
						</button>
					</a>
					<a target="_blank" href="mailto:contact@efrenpalacios.dev">
						<button
							className="mt-8 sm:ml-8 bg-yellow-500 hover:bg-yellow-300
							text-gray-900 font-bold py-2 px-4 rounded outline-none flex justify-center items-center"
							style={{ minWidth: "200px" }}
						>
							Contact Me{" "}
							<img
								width="25px"
								src="/img/icons/icon-mail.svg"
								alt=""
								className="ml-4"
							/>
						</button>
					</a>
				</div>
				{/* 				<Hero
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
				</Hero> */}
			</>
		);
  }
}