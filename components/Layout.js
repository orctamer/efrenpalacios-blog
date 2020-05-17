import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from './Hero';
import Footer from './Footer';
import {Container} from 'bloomer';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
			<>
				<Head>
					<meta charset="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta http-equiv="X-UA-Compatible" content="ie=edge" />
					<link rel="icon" sizes="192x192" href="../logo.png" />
					<title>{this.props.title || "Efren Palacios"}</title>
					<meta
						name="description"
						content={this.props.des || "Personal blog and portfolio showcase."}
					/>
					<meta
						property="og:description"
						content={this.props.des || "Personal blog and portfolio showcase."}
					/>
					<meta
						property="og:title"
						content={this.props.title || "Efren Palacios"}
					/>
					<meta
						property="og:url"
						content={this.props.url || "https://efrenpalacios.dev"}
					/>
					<meta
						property="og:image"
						content={
							this.props.image || "https://efrenpalacios.dev/img/logo.png"
						}
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="https://cdn.jsdelivr.net/npm/bulma@0.8.2/css/bulma.min.css"
					/>
					<script src="https://kit.fontawesome.com/148a8bbbe5.js"></script>
				</Head>
				<Hero />
				<Container>{this.props.children}</Container>
				<Footer />
			</>
		);
  }
}