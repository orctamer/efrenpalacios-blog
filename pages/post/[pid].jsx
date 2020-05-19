import React from 'react'
import Butter from 'buttercms'
import Layout from '../../components/Layout';
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
				<div dangerouslySetInnerHTML={{__html: post.body}} />
			</div>
			</Layout>
		);
  }
}