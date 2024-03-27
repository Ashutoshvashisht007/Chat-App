import ChatIcon from '@mui/icons-material/Chat';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LogoutIcon from '@mui/icons-material/Logout';

const SideBar = () => {
    return (
        <div className="bg-sky-950 w-[90px] rounded-lg flex items-center justify-between flex-col text-white sticky" style={{ height: "calc(100vh - 40px)" }}>
            <div className="h-1/3">Hey</div>
            <div className="flex items-center justify-center flex-col h-1/4 ">
                <span className="cursor-pointer bg-pink-900 h-[50px] w-[50px] hover:bg-pink-900 flex items-center justify-center rounded-full">
                    <ChatIcon />
                </span>
                <span className="cursor-pointer h-[50px] w-[50px] hover:bg-pink-900 flex items-center justify-center rounded-full">
                    <AutorenewIcon />
                </span>
                
            </div>
            <div className="h-1/3 flex items-end mb-4 ">
                <span className='cursor-pointer flex items-center h-[50px] w-[50px] hover:bg-pink-900 justify-center rounded-full'>
                    <LogoutIcon/>
                </span>
            </div>
        </div>
    )
}

export default SideBar