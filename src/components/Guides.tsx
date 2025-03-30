import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PathBox from "./PathBox";
import Link from "next/link";

const Guides = () => {
  return (
    <section className="w-full flex justify-center py-4">
      <div className="w-2/4">
        <div className="text-gray-800">
          <div className="flex items-center space-x-1 text-xl max-md:text-lg">
            <FontAwesomeIcon
              icon={faFilePen}
              className="w-[20px] max-md:w-[15px]"
            />
            <span>Guides</span>
          </div>
          <p className="max-md:text-sm">
            This section provides a step-by-step approach to using our APIs
            effectively.
          </p>
          <div className="space-x-2 flex flex-wrap items-center mt-1.5 max-md:text-sm">
            <span className="font-semibold">Base URL:</span>
            <PathBox>https://empirical-api.tripleartisan.com/</PathBox>
          </div>
          <div className="mt-1.5 max-md:text-sm">
            <p className="font-semibold">Endpoints:</p>
            <div className="flex flex-wrap space-x-2 space-y-2 max-md:space-x-1 max-md:space-y-1">
              <PathBox>/api/users</PathBox>
              <PathBox>/api/posts</PathBox>
              <PathBox>/api/comments</PathBox>
            </div>
          </div>
          <div className="mt-1.5 space-y-1.5">
            <div className="rounded-lg shadow-[0_5px_6px_rgba(0,0,0,0.20)] min-2xl:w-max overflow-auto">
              <table className="w-max">
                <thead className="border-b border-b-gray-200">
                  <tr>
                    <th className="font-semibold p-3 text-left max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Method
                    </th>
                    <th className="font-semibold p-3 text-left max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Endpoint
                    </th>
                    <th className="font-semibold p-3 text-left max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/users">/api/users</Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get all users
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/posts">/api/posts</Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get all posts
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/comments">/api/comments</Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get all comments
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/users/1">/api/users/[id]</Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get user by specified id
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/posts/1">/api/posts/[id]</Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get post by specified id
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/posts/2/comments">
                          /api/posts/[id]/comments
                        </Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get comments for the specified post Id
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/posts?userId=1">
                          /api/posts?userId=[id]
                        </Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Get posts of a user by specified user id
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-blue-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      GET
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>
                        <Link href="/api/comments?userId=4&postId=2">
                          /api/comments?userId=[id]&postId=[id]
                        </Link>
                      </PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      A comment on a post from a user
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-green-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      POST
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>/api/users</PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Create a new user n.b. it's temporary
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-orange-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      PUT
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>/api/users</PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Update an existing user n.b. it's temporary
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 text-red-600 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      DELETE
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      <PathBox>/api/users</PathBox>
                    </td>
                    <td className="p-2 max-md:text-sm max-md:px-3 max-md:py-1.5">
                      Delete an existing user n.b. it's temporary
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;
