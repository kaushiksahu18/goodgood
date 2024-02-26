import { CiCircleCheck, CiCircleInfo } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoIosArrowForward } from "react-icons/io";

import star from "../assets/star.png";
import dimond from "../assets/dimond.png";
import trophicup from "../assets/trophicup.png";
import { ReactNode } from "react";

function Home() {
  const itemsforHeroMain = [
    {
      id: 1,
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      rating: 9.8,
      youGet:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      tag: "Best Choice",
    },
    {
      id: 2,
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      description:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      rating: 9.5,
      youGet:
        "Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations",
      tag: "Best Value",
    },
    {
      id: 2,
      title: "WixPro 72-Inch Responsive Website Builder",
      description:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      rating: 9.5,
      youGet:
        "Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      tag: "",
    },
  ];

  const itemsforRelatedCar = [
    {
      id: 1,
      title: "Webbuilder 1",
      description: "Computer  Modern clasic with wix support",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      newPrice: 39.96,
      oldPrice: 49.96,
      discount: 20,
      isOffer: true,
    },
    {
      id: 2,
      title: "Webbuilder 1",
      description: "Computer  Modern clasic with wix support",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      newPrice: 39.96,
      oldPrice: 49.96,
      discount: 20,
      isOffer: true,
    },
    {
      id: 3,
      title: "Webbuilder 1",
      description: "Computer  Modern clasic with wix support",
      image:
        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      newPrice: 39.96,
      oldPrice: 49.96,
      discount: 20,
      isOffer: true,
    },
  ];

  return (
    <>
      <div className="relative top-[16vw] lg:top-[5.5vw] w-full h-full px-4">
        <div id="main" className="w-full h-full bg-white">
          <h2 className="text-[5vw] lg:text-[3.5vw] pt-[2vw] pb-[1vw] leading-none tracking-tighter">
            Best Website builders in the US
          </h2>
          <div>
            <div className="w-full h-[1px] bg-zinc-300"></div>
            <div className="flex justify-between items-center p-[0.2vw]">
              <div className="flex items-center gap-[1vw] flex-col lg:flex-row">
                <div className="flex gap-[1vw] items-center">
                  <CiCircleCheck
                    style={{ display: "inline-block", width: "2vw" }}
                    color="black"
                  />
                  <span> Last Updated - February 22,2020</span>
                </div>
                <div className="flex gap-[1vw] items-center">
                  <CiCircleInfo
                    style={{ display: "inline-block", width: "2vw" }}
                    color="black"
                  />
                  <span>Advertising Disclosure</span>
                </div>
              </div>
              <div className="">
                <Select>
                  <SelectTrigger className="w-[11vw] border-none active:border-none focus:border-none">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Filters</SelectLabel>
                      <SelectItem value="apple">Low to High</SelectItem>
                      <SelectItem value="banana">High to Low</SelectItem>
                      <SelectItem value="blueberry">Populer</SelectItem>
                      <SelectItem value="grapes">High Rank</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="w-full h-[1px] bg-zinc-300"></div>
          </div>
        </div>
        <div className="flex itemsforHeroMain-center gap-[4vw_4vw_4vw_0] p-[1vw_0]">
          {[
            "Tools",
            "AWS Builder",
            "Start Build",
            "Build Supplies",
            "Tooling",
            "BlueHosting",
          ].map((item, index) => {
            return (
              <button
                id={String(index)}
                className="px-6 py-2 rounded-lg transform hover:-translate-y-1 transition duration-400"
              >
                {item}
              </button>
            );
          })}
        </div>
        <div id="path" className="flex gap-[0.2vw] itemsforHeroMain-center">
          {["Home", "Hosting for all", "Hosting", "Hosting6", "Hosting6"].map(
            (item, index, arr) => {
              return (
                <>
                  <a
                    id={String(index)}
                    href="#"
                    className="hover:underline text-[1vw] font-[400]"
                  >
                    {item}
                  </a>
                  {index < arr.length - 1 && <IoIosArrowForward />}
                </>
              );
            }
          )}
        </div>
        <div
          id="home-main-itemsforHeroMain"
          className="py-[2vw] flex flex-col itemsforHeroMain-center gap-[5vw]"
        >
          {itemsforHeroMain.map((item, index) => {
            return <HomeMainItem data={item} mkey={index} />;
          })}
        </div>
      </div>
      <div className="mt-[3.56vw] px-4 pt-[2vw] pl-[3vw] relative pb-[4vw]">
        <h3 className="text-[2vw] font-[600]">
          Related deals you might like for
        </h3>
        <div className="flex whitespace-nowrap gap-2">
          {itemsforRelatedCar.map((item, index) => {
            return <RelatedCards data={item} mkey={index} />;
          })}
        </div>
      </div>
    </>
  );
}

export function HomeMainItem({
  data,
  mkey,
}: {
  data: {
    id: number;
    title: string;
    description: string;
    image: string;
    rating: number;
    youGet: string;
    tag: string;
  };
  mkey: number;
}) {
  const stars: ReactNode[] = [];
  for (let i = 0; i < data.rating / 2; i++) {
    stars.push(
      <img
        src={star}
        className="object-cover object-center w-[20%]"
        alt="star"
      />
    );
  }

  const tagLogo: string[] = [dimond, trophicup];

  return (
    <div mkey={mkey} className="flex flex-col overflow-hidden w-full h-[20vw]">
      {data.tag && (
        <div className="bg-orange-500 text-white rounded-r-md w-fit p-[0.4vw] flex gap-2">
          <img
            src={tagLogo[Math.floor(Math.random() * tagLogo.length)]}
            className="w-[15%] object-cover object-center"
            alt=""
          />
          <span>{data.tag}</span>
        </div>
      )}
      <div className="flex w-full">
        <div className="w-[25vw] group">
          <div className="w-full h-full p-[2vw] overflow-hidden rounded-lg">
            <img
              className="object-cover object-center group-hover:scale-[1.05] transition-all duration-700"
              src={data.image}
              alt=""
            />
          </div>
        </div>
        <div className="w-1/2 whitespace-normal flex flex-col pr-[1vw]">
          <div>
            <h3 className="text-xl font-[500]">{data.title}</h3>
            <span> - </span>
            <span className="text-sm">{data.description}</span>
          </div>
          <div>
            <h3 className="text-xl font-[600] py-[0.5vw]">Main Highlights</h3>
            <div className="p-[0.5vw] text-sm">
              [What You Get]:{data.youGet}
            </div>
          </div>
          <a href="#" className="text-blue-700 text-xl">
            Show more{" "}
          </a>
        </div>
        <div className="flex flex-col p-[2vw] gap-[2.6vw] itemsforHeroMain-center">
          <div className="bg-blue-100 text-3xl text-[#184978] w-[8vw] h-[8vw] rounded-lg relative">
            <span className="inline-block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {data.rating} <br /> <span className="flex">{...stars}</span>{" "}
            </span>
          </div>
          <button className="bg-sky-500 text-white text-xl rounded-lg py-[0.5vw] px-[5vw]">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export function RelatedCards({
  data,
  mkey,
}: {
  data: {
    title: string;
    description: string;
    image: string;
    newPrice: number;
    oldPrice: number;
    discount: number;
    isOffer: boolean;
  };
  mkey: number;
}) {
  return (
    <div
      mkey={mkey}
      className="w-[90vw] flex flex-col gap-[0.8vw] p-[1vw] bg-white"
    >
      <div className="flex justify-center overflow-hidden rounded-lg items-center p-[1vw] group">
        <img
          className="w-[1000%] object-cover object-center group-hover:scale-[1.02] transition-all duration-700"
          src={data.image}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        {data.isOffer && (
          <div className="flex gap-[1vw] items-center">
            {[`${data.discount}% Off`, "Limited time"].map((item, index) => {
              return (
                <span
                  className="bg-sky-100 text-[#184978] px-2 py-[1px] text-[0.8vw] rounded-md"
                  id={String(index)}
                >
                  {item}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="text-center text-xl font-[600]">{data.title}</div>
      <div className="whitespace-normal">{data.description}</div>
      <div className="flex gap-[0.4vw] items-center justify-start">
        {[data.newPrice, data.oldPrice].map((item, index) => {
          return (
            <span
              className={`${
                index === 0
                  ? "text-lg text-zinc-800 font-[600]"
                  : "text-sm text-zinc-400 font-[300]"
              }`}
              id={String(index)}
            >
              ${item}
            </span>
          );
        })}
        {data.isOffer && (
          <span className="text-red-700 px-2 py-[1px] text-[0.8vw]">
            ({data.discount}% Off)
          </span>
        )}
      </div>
      <button className="bg-sky-500 rounded-lg text-white py-[1vw]">
        View Deal
      </button>
    </div>
  );
}

export default Home;
