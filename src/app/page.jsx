import Head from "next/head";
import Image from "next/image";

//Images 

import profileImage from './public/p2.png';
import web1 from './public/web1.png';
import web2 from './public/web2.png';

import web3 from './public/web3.png';




//Icons
import { BsMoonStarsFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";



export default function Home() {
  return (
    <div>
      <Head>
      
      <title>ProtFoli App</title>
      <style>
    @import url(
  https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap
  );
      </style>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      </Head>
      <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg:px-40">
      {/* nav and hero */}
      <section >
        {/* nav */}
        <nav className=" py-10 flex justify-between">
        <h1 className=" text-sm md:text-1xl">Developed by Simplenotion</h1>
        <ul className=" flex items-center">
          <li><BsMoonStarsFill className=" cursor-pointer text-xl mx-5"/></li>
          <li><a 
          href="https://drive.google.com/file/d/1dp22oqrNzxCQgSH108UIDUK2HH0MWvsW/view?usp=sharing"
          download={"resume"}
          className="bg-yellow-400 px-4 py-2 text-black border-none rounded-md"
          >Resume</a>

          </li>
        </ul>
        </nav>
       <div className="text-center p-10 ">
       {/* hero */}
        <h1 className="text-5xl text-yellow-400 font-bold md:text-10xl lg:text-15xl lg:mb-4">Simple Notion</h1>
        <h3 className="text-2xl py-4">SAAS Brand Developers</h3>
        <p className="text-sm text-gray-400 py-4 leading-6 mx-w-xl mx-auto md:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel alias sequi officia, saepe ipsa reiciendis quisquam consequatur quam esse quia consectetur itaque nisi facilis, doloremque perspiciatis repellat nam veniam sint!</p>

        {/* social */}

        <div className=" text-5xl text-gray-600 flex justify-center gap-8 ">
<a href="https://github.com/Mahima-Sanketh-Git"><FaLinkedin/></a>
<a href="https://github.com/Mahima-Sanketh-Git"><FaFacebook/></a>
<a href="https://github.com/Mahima-Sanketh-Git"><FaGithub/></a>
<a href="https://github.com/Mahima-Sanketh-Git"><FaTwitter/></a>
<a href="https://github.com/Mahima-Sanketh-Git"><FaMedium/></a>
        </div>
        <div className="m-auto relative bg-gradient-to-b from-yellow-200 h-90 w-full max-w-md p-5 mt-10 rounded-full">
<Image src={profileImage} alt="hero-image" objectFit="cover"/>       
 </div>
       </div>
      </section>
      {/* offer service  */}

      <section className="p-6">
  <div className="flex flex-col gap-10 lg:flex-row mx-auto w-full max-w-screen-lg">
    <h1 className="text-3xl text-gray-500 mb-6 lg:mb-0 lg:w-full lg:text-left">Services we offer</h1>
  </div>

  <div className="flex flex-col gap-6 lg:flex-row mx-auto w-full max-w-screen-lg">
    <div className="bg-yellow-400 h-auto border-none rounded-sm flex items-center text-center p-6 flex-1">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum debitis sunt, illo, at maxime voluptatibus officia temporibus voluptates sit numquam hic necessitatibus ipsa laboriosam libero amet. Alias atque officia assumenda!</p>
    </div>

    <div className="bg-yellow-400 h-auto border-none rounded-sm flex items-center text-center p-6 flex-1">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam blanditiis ullam earum, sit itaque vero. Fugiat exercitationem tempore quibusdam quod, sequi recusandae debitis molestias cum, at ullam repellat! Optio, corporis.</p>
    </div>

    <div className="bg-yellow-400 h-auto border-none rounded-sm flex items-center text-center p-6 flex-1">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt unde atque quo explicabo laborum quasi! Corrupti reprehenderit nulla cumque sint dolorum, impedit nobis provident, tenetur praesentium quidem architecto, hic quasi!</p>
    </div>
  </div>
</section>



      {/* portfolio */}

      <section>
        <div className=" mt-10">
          <h3 className="text-3xl text-gray-600">Portfolio</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque architecto illo similique ab in accusantium, eaque velit excepturi enim fugit expedita quisquam sunt quidem recusandae. Illo ab voluptatibus maxime corporis.</p>
          <div className=" flex flex-col gap-10 mt-8 lg:flex-row lg:flex-wrap">
          <div className=" basis 1/3 flex-1">
          <Image src={web1} 
          alt="img1"                 
          className="rounded-lg object-cover w-full h-full"
          layout="responsive"
          />
          </div>
          
          <div className=" basis 1/3 flex-1">
          <Image src={web2} 
          alt="img1"                 
          className="rounded-lg object-cover w-full h-full"
          layout="responsive"
          />
          </div>
          <div className=" basis 1/3 flex-1">
          <Image src={web3} 
          alt="img1"                 
          className="rounded-lg object-cover w-full h-full"
          layout="responsive"
          />
          </div>
          <div className=" basis 1/3 flex-1">
          <Image src={web2} 
          alt="img1"                 
          className="rounded-lg object-cover w-full h-full"
          layout="responsive"
          />
          </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
