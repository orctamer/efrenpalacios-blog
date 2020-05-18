import React from 'react'
import Butter from 'buttercms'
import Layout from '../../components/Layout';
import Link from 'next/link';
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
			
			<div className="flex flex-col justify-center items-center mt-12">
					<Link href="/"><button class="self-start bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded mb-12 outline-none">
						<span className="inline-block" style={{transform: "rotate(180deg)"}}>&#x279c;</span> Go Home
					</button>
					</Link>
				<div dangerouslySetInnerHTML={{__html: post.body}} />
			</div>
			</Layout>
		);
  }
}