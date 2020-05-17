import Butter from 'buttercms';
import Link from 'next/link';
import React from 'react';
const butter = Butter('430cc549c2a2e042f6ac3ca1ea8f2baaf6cf9819')
import Layout from '../components/Layout';
import {motion} from 'framer-motion';

import {Section, Card, CardHeader, CardHeaderTitle , CardImage, Image, CardContent, Media, MediaLeft, MediaContent, Title, Subtitle, Content, Columns, Column} from 'bloomer';


export default class extends React.Component {
  static async getInitialProps({query}) {
    let page = query.page || 1;
    const resp = await butter.post.list({page: page, page_size: 10})
    console.log(resp.data)
    return resp.data;
  }
  render() {
    const {next_page, previous_page} = this.props.meta;

    return (
			<Layout title="Efren Palacios" des="Efren Palacios personal website & portfolio" >
				<Section>
					<Columns isCentered>
						{this.props.data.map((post) => {
							return (
								<Column key={post.slug}>
									<Card>
										<CardHeader>
											<CardHeaderTitle>{post.title}</CardHeaderTitle>
										</CardHeader>
										<Link href="/post/[id]" as={`/post/${post.slug}`}>
											<a>
												<CardImage style={{ overflow: "hidden", background: '#101010' }}>
													<motion.div
														whileHover={{ scale: 1.05, opacity: 1 }}
														whileTap={{ scale: 0.95, opacity:1 }}
														initial={{ opacity: 0 }}
														animate={{ opacity: .5 }}
													>
														<Image isRatio="4:3" src={post.featured_image} />
													</motion.div>
												</CardImage>
											</a>
										</Link>
										<CardContent>
											<Content>
												{post.summary}
												<br />
												<small>
													Published:{" "}
													{new Date(post.published).toLocaleDateString("en-US")}
												</small>
											</Content>
										</CardContent>
									</Card>
								</Column>
							);
						})}
					</Columns>
				</Section>
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


