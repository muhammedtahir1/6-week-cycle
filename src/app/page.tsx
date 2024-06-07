import Body from "./components/Body";
import Nav from "./components/Nav";
import Faq from "./components/Faq";


export default function Home(){
  return (
    <div className="bg-black text-white w-full h-full px-14 py-6 flex flex-col gap-32 ">
      <Nav/>
      <Body/>
      <Faq/>
    </div>
  )
}