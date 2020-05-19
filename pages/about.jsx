import React from 'react';
import Layout from '../components/Layout';

const languages = ['JavaScript', 'Vue', 'Node', 'Socket-IO', 'PHP', 'Ruby', 'Jekyll', 'Python', 'CSS3', 'HTML5']
const tools = ['VSCode', 'GitHub', 'BitBucket', 'GitLab', 'Bulma', 'Semantic-UI', 'TailwindCSS', 'PowerShell', 'ConEmu', 'Hyper']
export default class extends React.Component {
  render() {
    return (
      <>
        <Layout isAbout={true}>
          <section className="relative">
            <div className="flex flex-col justify-center items-center">
              <div id="profile" className="sm:w-3/5 mt-8 h-full">
                <img src="./img/avatar.png" className="mx-auto w-32 my-10" />
                <h1 className="uppercase font-semibold text-4xl text-yellow-500 my-5 text-center">About Me</h1>
                <p className="text-xl text-center p-4">I'm a Programmer living in Orange County, California. Currently developing
                software using
                NodeJS, Rest APIs, WebSockets, and Electron. I'm passionate towards Web &amp; UI Design, Data Manipulation,
                Video Games and eSports. </p> <div className="flex justify-center mx-4 sm:mx-0 my-10"><img src="/img/icons/design.svg" alt="" className="sm:w-1/2" /></div></div></div></section>      
          <section className="mb-32">
            <div class="relative sm:mt-0 mt-32">
              <div class="my-8 border-2 border-solid border-yellow-500 sm:w-1/3 w-5/6 p-6 mx-auto">
                <h1 class="uppercase font-semibold text-2xl text-yellow-500 text-center mx-auto">TECHNOLOGIES</h1>
            </div> 
            <div class="flex justify-center  sm:justify-around sm:w-1/2 w-full flex-wrap mx-auto">
              {languages.map(lang => (
              <div class="flex flex-col justify-center items-center">
                <div class="mx-10">
                  <img src={`/img/icons/${lang.toLowerCase()}.svg`} alt="" class="sm:w-10 w-8" />
                </div> 
                <div>
                  <p class="py-5">{lang}</p>
                </div>
                </div>
              ))}
              </div>
              <div class="my-8 border-2 border-solid border-yellow-500 sm:w-1/3 w-5/6 p-6 mx-auto mt-32">
                <h1 class="uppercase font-semibold text-2xl text-yellow-500 text-center mx-auto">DEVELOPMENT TOOLS</h1>
              </div> 
            <div class="flex justify-center  sm:justify-around sm:w-1/2 w-full flex-wrap mx-auto">
              {tools.map(tool => (
              <div class="flex flex-col justify-center items-center">
                <div class="mx-10">
                  <img src={`/img/icons/${tool.toLowerCase()}.svg`} alt="" class="sm:w-10 w-8" />
                </div> 
                <div>
                  <p class="py-5">{tool}</p>
                </div>
                </div>
              ))}
              </div>
            </div>
          </section>
        </Layout>
      </>
    )
  }
}