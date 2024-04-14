// Gerarden company information, contact information, and social media links.

import Link from "next/link";
import { companyMedia } from "@/constants";

export default function Company() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
      {companyMedia.map(({ name, description, href, icon: Icon }) => (
        <div
          key={name}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gray-50 text-gray-800">
                {/* TODO: Add icons from library */}
                <Icon />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <p className="mt-1 text-sm text-gray-600">{description}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <Link
                href={href}
                className="text-sm text-indigo-600 hover:text-indigo-800"
                rel="noopener noreferrer"
                target="_blank"
              >
                Learn more
                <svg
                  className="w-4 h-4 ml-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 1.414L14.586 11H3a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
