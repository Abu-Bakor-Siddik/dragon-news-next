import Link from "next/link";

const NotFound = () => {
    return (
        <div className="h-[80vh] flex justify-center items-center flex-col space-y-4">
            <h2 className="font-bold text-5xl text-purple-500">This Page is not found</h2>
            <Link href={'/'}><button className="btn btn-primary">Back to home</button></Link>
        </div>
    );
};

export default NotFound;