
import { Card } from "../Card/Card"
import { useState } from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
export const Post = ({ profile }) => {
    const [seeMore, setSeeMore] = useState(false);
    const [comment, setComment] = useState(false);
    const desc = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum reiciendis libero commodi velit, delectus ratione impedit, corporis rem adipisci est provident fugiat optio a molestias. Quia aliquid dicta consequatur. Impedit.`

    const handleSendComment = (e) => {
        e.preventDefault();
    }

    return (
        <Card padding={0}>
            <div className="flex gap-3 p-4">
                <div className="w-12 h-12 rounded-4xl">
                    <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="" className="rounded-4xl w-12 h-12 border-2 border-white cursor-pointer" />
                </div>
                <div>
                    <div className="text-lg font-semibold">Dumy User</div>

                    <div className="text-xs text-gray-500">SDE-II Eng. @Amazon</div>
                </div>
            </div>

            <div className="text-md p-4 my-3 whitespace-pre-line grow">
                {seeMore ? desc : `${desc.slice(0, 50)}....`} <span onClick={() => setSeeMore((prev) => !prev)} className="cursor-pointer text-gray-500 hover:underline">{seeMore ? "See Less" : "See More"}</span>
            </div>

            <div className="w-full h-[300px]">
                <img src="https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4=" alt="Post Image" className="w-full h-full" />
            </div>

            <div className="my-2 p-4 flex justify-between items-center">
                <div className="flex gap-1 items-center">
                    <ThumbUpIcon sx={{ color: "blue", fontSize: 12 }} /> <span className="text-sm text-gray-600">1 Likes</span>
                </div>
                <div className="flex gap-1 items-center">
                    <span className="text-sm text-gray-600">2 Comments</span>
                </div>
            </div>

            {!profile && (
                <>
                    <div className="flex p-1">
                        <div className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100"><ThumbUpIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Like</span></div>
                        <div onClick={() => setComment(true)} className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100"><CommentIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Comment</span></div>
                        <div className="w-[33%] justify-center flex gap-2 items-center border-r border-gray-100 p-2 cursor-pointer hover:bg-gray-100"><SendIcon sx={{ fontSize: 22, color: "blue" }} /> <span>Share</span></div>
                    </div>
                </>
            )}

            {/* Comment Section */}
            {comment && (
                <>
                    <div className="p-4 w-full">
                        <div className="flex gap-2 items-center">
                            <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Profile Logo" className="rounded-full w-12 h-12 border-2 border-white cursor-pointer" />

                            <form action="" className="w-full flex gap-2" onSubmit={handleSendComment}>
                                <input placeholder="Add a comment..." className="w-full border py-3 px-5 rounded-3xl hover:bg-gray-100" type="text" />
                                <button type="submit" className="cursor-pointer bg-blue-800 text-white rounded-3xl py-1 px-7">Send</button>
                            </form>
                        </div>

                        {/* Other's comment section */}
                        <div className="w-full p-4">
                            <div className="my-4">
                                <div className="flex gap-3">
                                    <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Profile Logo" className="rounded-full w-10 h-10 border-2 border-white cursor-pointer" />

                                    <div className="cursor-pointer">
                                        <div className="text-md">Dummy User</div>
                                        <div className="text-sm text-gray-500">@Amazon SDE-II</div>
                                    </div>
                                </div>

                                <div className="px-11 my-2">Hi, This is beautiful</div>
                            </div>

                            <div className="my-4">
                                <div className="flex gap-3">
                                    <img src="https://avatar.iran.liara.run/public/boy?username=Ash" alt="Profile Logo" className="rounded-full w-10 h-10 border-2 border-white cursor-pointer" />

                                    <div className="cursor-pointer">
                                        <div className="text-md">Dummy User</div>
                                        <div className="text-sm text-gray-500">@Amazon SDE-II</div>
                                    </div>
                                </div>

                                <div className="px-11 my-2">Hi, This is beautiful</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Card>
    )
}