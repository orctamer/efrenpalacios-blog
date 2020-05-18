import Butter from 'buttercms';
import Link from 'next/link';
import React from 'react';
const butter = Butter('430cc549c2a2e042f6ac3ca1ea8f2baaf6cf9819')
import Layout from '../components/Layout';

export default class extends React.Component {
  static async getInitialProps({query}) {
    let page = query.page || 1;
    const resp = await butter.post.list({page: page, page_size: 10})
    return resp.data;
  }
  render() {
    const {next_page, previous_page} = this.props.meta;

    return (
			<Layout title="Efren Palacios" des="Efren Palacios Personal Website & Portfolio" >
						{this.props.data.map((post) => {
							return (
								<div key={post.slug} className="relative rounded-lg block md:flex items-center shadow my-12" style={{ minHeight: "19rem", background: "#101010" }} >
									<Link href="/post/[id]" as={`/post/${post.slug}`}>
									<div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg bg-gray-900 cursor-pointer" style={{ minHeight: "19rem" }}>
										<img className="absolute inset-0 w-full h-full object-cover object-center bg-gray-900 " src={post.featured_image} alt="" />
										<div className="absolute inset-0 w-full h-full bg-black opacity-50 hover:opacity-0" style={{transition: "opacity 250ms"}}></div>										
									</div>
									</Link>
									<div className="w-full md:w-3/5 h-full flex items-center rounded-lg " style={{background: '#101010'}}>
										<div className="p-12 md:pr-24 md:pl-16 md:py-12">
											<p className="text-3xl text-gray-100 leading-3 tracking-tight font-semibold">{post.title}</p>
											<p className="text-gray-400">{post.summary}</p>
											<Link href="/post/[id]" as={`/post/${post.slug}`}>
											<a className="flex items-baseline mt-3 text-yellow-500 hover:text-yellow-300 focus:text-yellow-300">
												<span>Read more about this article</span>
												<span className="text-xs ml-1">&#x279c;</span>
											</a>
											</Link>
											<p className="text-sm text-white opacity-25">													Published:{" "}
												{new Date(post.published).toLocaleDateString("en-US")}</p>
										</div>
									</div>
								</div>
							);
						})}
				<br />
				<div>
					{previous_page && (
						<Link href={`/?page=${previous_page}`}>
							<a>Prev</a>
						</Link>
					)}
					{next_page && (
						<Link href={`/?page=${next_page}`}>
							<a>Next</a>
						</Link>
					)}
				</div>
			</Layout>
		);
  }
}


