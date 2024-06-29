import axios from "axios";
import { Appbar } from "../components/Appbar";
import { ChangeEvent, useState } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <Appbar />
      <div className="bg-gradient-to-r from-slate-200 via-slate-300 to-slate-300 h-screen ">
        <div className=" grid grid-cols-12 px-10 pt-8 max-w-screen-xl"> </div>

        <div className=" flex justify-center w-full pt-8">
          <div className="max-w-screen-lg w-full">
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              className=" w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Title"
            />
            <TextEditor
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <button
              onClick={async () => {
                const response = await axios.post(
                  `${BACKEND_URL}/api/v1/blog`,

                  {
                    title,
                    content: description,
                  },
                  {
                    headers: {
                      Authorization: localStorage.getItem("token"),
                    },
                  }
                );
                navigate(`/blog/${response.data.id}`);
              }}
              className=" mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium
        text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            >
              Publish post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function TextEditor({
  onChange,
}: {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="mt-2">
      <div className="mb-4 w-full">
        <div className="flex items—center justify—between border"></div>
        <div className="my-2 bg-white rounded-b-lg w-full">
          <label className="sr-only">Publish post</label>
          <textarea
            rows={8}
            className=" focus:outline-none block w-full px-0 text-sm text-gray-800 bg-white
            border-0 pl-2 border-solid"
            placeholder="Write an article..."
            required
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
