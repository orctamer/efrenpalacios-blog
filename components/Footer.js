import React from 'react';
import {Footer, Container, Content, Columns, Column, Icon, Image} from 'bloomer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export default class extends React.Component {
  render() {
    return (
			<>
				<Footer id="footer" style={{ background: "#101010" }}>
					<Container hasTextAlign="centered">
						<Content>
							<Columns>
								<Column>
									<div>
										Made with
										<FontAwesomeIcon
											className="has-text-danger"
											fixedWidth
											icon={faHeart}
										/>
										<a
											className="has-text-warning"
											href="https://nextjs.org/"
											target="_blank"
										>
											NextJS
										</a>{" "}
										& Headless CMS service provided by{" "}
										<a
											className="has-text-warning"
											href=" https://buttercms.com/"
											target="_blank"
										>
											ButterCMS
										</a>{" "}
										<Image
											style={{ width: "150px", margin: "0 auto" }}
											src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
										/>
									</div>
								</Column>
							</Columns>
							<Content isSize="small">
								<div>
									Copyright &copy; {new Date().getFullYear()} Efren Palacios{" "}
									<a
										className="has-text-warning"
										href="mailto:contact@efrenpalacios.dev"
									>
										contact@efrenpalacios.dev
									</a>
								</div>
							</Content>
						</Content>
					</Container>
				</Footer>
			</>
		);
  }
} 