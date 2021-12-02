import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const skill = [
    'Javascript',
    'Php',
    'Go',
    'Node Js',
    'Tailwind',
    'React',
    'NextJs',
    'Vue',
    'Express Js',
    'Laravel',
    'Mysql',
    'PostgreSQL',
  ]

  const certificate = [
    'Dicoding - AWS Cloud',
    'Progate - Javascript',
    'Progate - Git',
    'Pt.Sanber - Laravel'
  ]
  return (
 <div>
    <Head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link rel="icon" type="image/png" href="/favicon.png"/>
      <title>Irsal Hakim Alamsyah</title>
      <meta name="description" content="Hi ! my name is Irsal Hakim Alamsyah"></meta>
      <meta name="robots" content="index, follow"/>
      
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://irsalhakimalamsyah.com"/>
      <meta property="og:title" content="Irsal Hakim Alamsyah"/>
      <meta property="og:description" content="Hi ! my name is Irsal Hakim Alamsyah"/>
      <meta property="og:image" content="https://cdn.statically.io/og/Hello%20!%20my%20name%20is%20Irsal%20Hakim%20Alamsyah.jpg"/>


      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://irsalhakimalamsyah.com"/>
      <meta property="twitter:title" content="Irsal Hakim Alamsyah"/>
      <meta property="twitter:description" content="Hi ! my name is Irsal Hakim Alamsyah"/>
      <meta property="twitter:image" content="https://cdn.statically.io/og/Hello%20!%20my%20name%20is%20Irsal%20Hakim%20Alamsyah.jpg"></meta>
    </Head>
    <section className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          
            <div className="flex items-center flex-col justify-center">
            <div className="mt-8 lg:mt-0 lg:w-1/2">
                    <div className="flex items-center justify-center">
                        <div className="max-w-lg">
                            <img className="object-cover object-center w-full h-64 rounded-md shadow" src="https://avatars.githubusercontent.com/u/45132491" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 text-center">
                    <h1 className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">Irsal Hakim Alamsyah</h1>

                    <p className="mt-4 text-center text-gray-500 dark:text-gray-400">
                        Welcome to my personal website ! My name is Irsal Hakim Alamsyah Web Developer and Founder of <a className="px-1 py-1 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80" href="https://www.socialhattori.com">Social Hattori </a> 
                    </p>

                    <div className="flex justify-center mt-6 -mx-2">
                        <a className="mx-2" href="https://twitter.com/irsalha" aria-label="Twitter @irsalha">
                            Twitter @irsalha
                        </a>
                    
                        <a className="mx-2 text-center" href="https://id.linkedin.com/in/irsalha" aria-label="Linkedin @irsalha">
                        Linkedin @irsalha
                        </a>
                    
                        <a className="mx-2 text-center" href="https://github.com/IrsalHa" aria-label="Github @irsalha">
                        Github @irsalha
                        </a>
                    </div>
                </div>

              
            </div>
        </div>
    </section>

    <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
            <div className="relative">
                <p className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">Skill & Technology</p>
            </div>

            <div className="inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
                {skill.map(function(value,index) {
                 return ( <a key={index} className="block py-1">
                    <h3 className="font-medium text-gray-700 dark:text-gray-100 hover:underline">{value}</h3>
                </a>
                 )
                })}
                
            </div>
    </section>

    <section className="relative w-full max-w-md px-5 py-4 mx-auto rounded-md">
            <div className="relative">
                <p className="text-3xl text-center font-bold text-gray-800 dark:text-gray-100">Certificate</p>
            </div>

            <div className=" inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border border-gray-300 rounded-md max-h-72 dark:bg-gray-800 dark:border-transparent">
                {certificate.map(function(value,index) {
                 return ( <a key={index} className="block py-1">
                    <h3 className="font-medium text-gray-700 dark:text-gray-100 hover:underline">{value}</h3>
                </a>
                 )
                })}
                
            </div>
    </section>
 </div>
  )
}
