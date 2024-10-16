import Blog from "@/app/blog/page";
import Main from "@/components/main/main";

export default function Home() {
  return (
    <main className=" w-full">
      <div className="flex flex-col gap-20 "> 
        <Main/>
        <Blog/>
      </div>    
    </main>
  )
}

