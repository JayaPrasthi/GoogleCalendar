import Image from "next/image"

export const Header = () =>{
    return(
        <>
         <div className="w-[1100px]  mx-auto h-fill bg-white">
                <div className="flex flex-row w-[1100px] h-[100px]">
                    <div className="flex flex-row w-[100%] h-[80px]  pt-[10px] ">
                        <div className="mt-[5px] ml-[100px] ">
                            <Image
                                src="/Episyche.png"
                                width={200}
                                height={200}
                                alt="Episyche Logo"
                            />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}