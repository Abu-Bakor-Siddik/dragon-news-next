import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);

  return{
    title: news.title,
    description: news.details
  }
};

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewsDetailsById(id);
  return (
    <div className="max-w-4xl mx-auto my-8 ">
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body">
          <figure>
            <Image
              src={news.image_url}
              alt={news.title}
              width={300}
              height={300}
              className="w-full"></Image>
          </figure>
          <h2 className="card-title">{news.title}</h2>
          <p>{news.details}</p>
          <div className="">
            <Link href={`/category/${news.category_id}`}>
              <button className="btn w-72 bg-purple-500 text-white">
                {" "}
                <BsArrowLeft></BsArrowLeft> See other news for this category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
