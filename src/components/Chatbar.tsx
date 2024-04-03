type dumm = {
    photo: string,
    name: string,
    time: string,
    desc: string,
    chatNum: number
}

const dummy: dumm[] = [
    {
        photo: "url_to_photo1",
        name: "John",
        time: "aishdg",
        desc: "Description 1",
        chatNum: 3
    },
    {
        photo: "url_to_photo2",
        name: "Jane",
        time: "asdughasd",
        desc: "Description 2",
        chatNum: 5
    },
    {
        photo: "url_to_photo2",
        name: "Jane",
        time: "asiudghasgasdi",
        desc: "Description 2",
        chatNum: 5
    },
    {
        photo: "url_to_photo2",
        name: "Jane",
        time: "asiudghasgasdi",
        desc: "Description 2",
        chatNum: 5
    },
    {
        photo: "url_to_photo2",
        name: "Jane",
        time: "asiudghasgasdi",
        desc: "Description 2",
        chatNum: 5
    },
]

const Chatbar = () => {
  return (
    <div className="flex flex-col justify-evenly shadow-x h-eighty rounded-xl w-thirty overflow-scroll border-solid border-2 border-gray-200">
        <div className="flex">All</div>
        {
            dummy.map((ele,idx) => (
                <>
                <div key={idx} className="flex justify-between items-center h-twenty ">
                    <img className="rounded-full h-16 w-16 " src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={ele.name} />
                    <div className="flex flex-col items-center justify-around">
                        <span>{ele.name}</span>
                        <span>{ele.desc}</span>
                    </div>
                    <div className="flex flex-col items-end justify-end">
                        <span>{ele.time}</span>
                        <span>{ele.chatNum}</span>
                    </div>
                </div>
                <hr key={idx}/>
                </>
            ))
        }
    </div>
  )
}

export default Chatbar