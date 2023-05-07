import empty from "../assets/illustration-empty.svg"

export const Empty = ({data}) => {
  return (
    data &&
    (data.length === 0 && 
    <div className="self-center flex flex-col w-[200px] sm:w-[240px] mt-[100px]">
      <img src={empty} alt="empty illustration"></img>
      <h1 className="mt-10 font-bold leading-none text-center text-2xl">There is nothing here</h1>
      <p className="mt-6 leading-snug text-center greyy">Create an invoice by clicking the <span className="font-bold">New</span> button and get started</p>
    </div>)
  )
}