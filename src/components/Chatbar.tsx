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
    <div className="flex flex-col justify-evenly shadow-x h-eighty rounded-xl w-thirty overflow-scroll">
        <div>All</div>
        {
            dummy.map((ele,idx) => (
                <>
                <div key={idx} className="flex justify-between items-center h-twenty ">
                    <img src={ele.photo} alt={ele.name} />
                    <div className="flex flex-col items-center justify-around">
                        <span>{ele.name}</span>
                        <span>{ele.desc}</span>
                    </div>
                    <div className="flex flex-col items-center justify-around">
                        <span>{ele.time}</span>
                        <span>{ele.chatNum}</span>
                    </div>
                </div>
                <hr/>
                </>
            ))
        }
    </div>
  )
}

export default Chatbar