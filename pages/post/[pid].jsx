import React from 'react'
import Butter from 'buttercms'
import Layout from '../../components/Layout';
import Link from 'next/link';
import {Columns,Column, Button, Icon, Section, Title, Content, Media, MediaContent,  MediaLeft, MediaRight, Delete, Image, CardContent, Subtitle} from 'bloomer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
const butter = Butter('430cc549c2a2e042f6ac3ca1ea8f2baaf6cf9819');


export default class extends React.Component {
  static async getInitialProps({query}) {
    const resp = await butter.post.retrieve(query.pid);
    return resp.data;
  }
  render() {
    const post = this.props.data;
    return (
			<Layout
				title={post.seo_title + " | Efren Palacios" || ""}
				des={post.meta_description || ""} image={post.featured_image} url={post.url}
			>
				<Section>
					<Title isSize={1}>{post.title}</Title>
					<Content>
						<div dangerouslySetInnerHTML={{ __html: post.body }} />
					</Content>
				</Section>
				<Section>
					<Media>
						<CardContent>
							<Title isSize={3}>About Author</Title>
							<Media>
								<MediaLeft>
									<Image isSize="64x64" src="../logo.png" />
								</MediaLeft>
								<MediaContent>
									<Title isSize={4}>
										{post.author.first_name} {post.author.last_name}
									</Title>
									<Subtitle style={{ fontSize: "15px" }}>
										{post.author.title}
									</Subtitle>
									<Subtitle isSize={6}>
										<FontAwesomeIcon
											icon={faTwitter}
											fixedWidth
											className="has-text-info"
										/>
										<a target="_blank" href="https://twitter.com/effy_dev">
											{post.author.twitter_handle}
										</a>
										<br />
										<FontAwesomeIcon
											icon={faLinkedin}
											fixedWidth
											className="has-text-dark"
										/>
										<a href={post.author.linkedin_url} target="_blank">
											Efren Palacios
										</a>
									</Subtitle>
								</MediaContent>
							</Media>
							<Content>{post.author.bio}</Content>
						</CardContent>
					</Media>
					<Columns hasTextAlign="centered">
						<Column>
							<Link href="/">
								<a>
									<Button isColor="black">
										<FontAwesomeIcon
											icon={faArrowLeft}
											fixedWidth
											className="has-text-color-light"
										/>
										<span>Go Home</span>
									</Button>
								</a>
							</Link>
						</Column>
					</Columns>
				</Section>
			</Layout>
		);
  }
}