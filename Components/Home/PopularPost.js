import { AutorLine, Title } from "../PanelPrimary"

const PopularPost = () => {
    return (
        <div className="bg-white shadow-md p-8 gap-10 grid grid-cols-1">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default PopularPost


const Post = () => {
    return (
        <div className="flex gap-4 items-center justify-start">
            <img src="/venezuela.png" className="object-cover w-14 h-14 rounded-full" />
            <span className="block flex flex-col items-start justify-center">
                <Title titulo={"Lorem Impsumssss"} size={"md"} />
                <AutorLine />

            </span>
        </div>
    )
}

