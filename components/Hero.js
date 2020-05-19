import React from 'react';
import Link from 'next/link';

export default class extends React.Component {
  render() {
    return (
			<>
				<div className="py-6 flex justify-center items-center flex-col sm:flex-row">
					<Link href="/">
						<img
							className="h-32 border-solid border-yellow-400 border-4 w-32 cursor-pointer"
							src="../logo.png"
						/>
					</Link>
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
					{!this.props.isHome && (
						<Link href="/">
							<button
								className="mt-8 sm:ml-8 bg-yellow-500 hover:bg-yellow-300
							text-gray-900 font-bold py-2 px-4 rounded outline-none flex justify-center items-center"
								style={{ minWidth: "200px" }}
							>
								Go Home{" "}
								<span className=" ml-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="25"
										height="25"
										viewBox="0 0 25 25"
									>
										<path d="M12 9.185l7 6.514v6.301h-3v-5h-8v5h-3v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h7v-5h4v5h7v-9.172l-9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
									</svg>
								</span>
							</button>
						</Link>
					)}
					<a target="_blank" href="./Efren_Palacios_Resume.pdf">
						<button
							className="mt-8 sm:ml-8 bg-yellow-500 hover:bg-yellow-300
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
					<Link href="/about">
						<button
							className="mt-8 sm:ml-8 bg-yellow-500 hover:bg-yellow-300
							text-gray-900 font-bold py-2 px-4 rounded outline-none flex justify-center items-center"
							style={{ minWidth: "200px" }}
						>
							About Me{" "}
							<img
								width="25px"
								src="/img/icons/about.svg"
								alt=""
								className="ml-4"
							/>
						</button>
					</Link>
				</div>
			</>
		);
  }
}