import googleIcon from "@/assets/google.png";
import githubIcon from "@/assets/github.png";
import fbIcon from "@/assets/fb.png";
import twitterIcon from "@/assets/twitter.png";
import instagramIcon from "@/assets/instagram.png";
import classImg from "@/assets/class.png";
import playgroundImg from "@/assets/playground.png";
import swimmingImg from "@/assets/swimming.png";
import bGImg from "@/assets/bg.png";
import Image from "next/image";
import Link from "next/link";
const loginSection = () => {
  return (
    <div className="space-y-3 my-5">
      <Link
        href={"/"}
        className="bg-white text-blue-500 text-xl border border-blue-400 rounded-xl flex justify-center items-center gap-2 py-1"
      >
        <Image
          src={googleIcon}
          alt="google symbol"
          width={16}
          height={16}
        ></Image>
        Login with Google
      </Link>
      <Link
        href={"/"}
        className="bg-white text-black text-xl border border-gray-400 rounded-xl flex justify-center items-center gap-2 py-1"
      >
        <Image
          src={githubIcon}
          alt="google symbol"
          width={16}
          height={16}
        ></Image>
        Login with Github
      </Link>
      <h1 className="text-xl font-bold">Find Us On</h1>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/Joy.Ghosh.Sourjo"
            target="_blank"
            className="p-3 border-2 border-gray-200 flex items-center gap-2 w-full"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <Image src={fbIcon} alt="facebook symbol"></Image>
            </div>
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Joy_Ghoshsourjo"
            target="_blank"
            className="p-3 border-t-0 border-2 border-gray-200 flex items-center gap-2 w-full"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <Image src={twitterIcon} alt="facebook symbol"></Image>
            </div>
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/sourjo__ghosh/"
            target="_blank"
            className="p-3 border-t-0 border-2 border-gray-200 flex items-center gap-2 w-full"
          >
            <div className="bg-gray-200 p-2 rounded-full">
              <Image src={instagramIcon} alt="facebook symbol"></Image>
            </div>
            Instagram
          </a>
        </li>
      </ul>
      <div>
        <div className="bg-gray-200 p-3 rounded-sm">
          <h1 className="text-2xl font-bold">Q-Zone</h1>
          <div>
            <ul className="flex justify-center items-center">
              <li>
                <Image
                  src={swimmingImg}
                  alt="swimming picture"
                  width={400}
                  height={400}
                ></Image>
                <Image
                  src={classImg}
                  alt="swimming picture"
                  width={400}
                  height={400}
                ></Image>
                <Image
                  src={playgroundImg}
                  alt="swimming picture"
                  width={400}
                  height={400}
                ></Image>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-3">
          <Image
            src={bGImg}
            alt="swimming picture"
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default loginSection;
