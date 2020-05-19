import React from 'react';
import Head from 'next/head';
import Hero from './Hero';
import Footer from './Footer';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			hasScrolled: false
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}
	onScroll = () => {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {			

			this.setState({ hasScrolled: true });
		} else {
			this.setState({ hasScrolled: false });
		}
	}
	handleScrollTo() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
  }
  render() {
    return (
			<>
				<Head>
					<meta charSet="UTF-8" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					/>
					<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
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
				</Head>
				<div
					onClick={() => this.handleScrollTo()}
					style={
						this.state.hasScrolled
							? {
									opacity: "100",
									visibility: "visible",
									opacity: 1,
									transitionDelay: "0s",
							  }
							: {
									visibility: "hidden",
									opacity: 0,
									transition:
										"visibility 0s linear 0.33s, opacity 0.33s linear",
							  }
					}
				>
					<button className="fixed inline-block bottom-0 right-0 m-5 bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded z-50">
						<img
							src="../img/icons/caret.svg"
							className="w-6 fill-current text-black"
						/>
					</button>
				</div>
				<Hero isHome={this.props.isHome} isAbout={this.props.isAbout} />
				<div className="container mx-auto px-4"> {this.props.children} </div>
				<Footer />
			</>
		);
  }
}