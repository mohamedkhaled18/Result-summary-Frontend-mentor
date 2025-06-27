
const ResultComponent = () => {

  return (
    <div className="result [background-image:var(--gradient-primary)] rounded-2xl text-center p-4 md:w-[50%] flex justify-evenly flex-col">
      <p className="text-[var(--light-lavender)] capitalize text-2xl my-5">your result</p>
      <div className="result-number [background-image:var(--gradient-secondary)] rounded-full w-[150px] h-[150px] flex justify-center items-center flex-col mx-auto">
        <p className="font-bold text-2xl text-white text-5xl">76</p>
        <p className="text-md text-[var(--light-lavender)]">of 100</p>
      </div>
      <div className="result-info">
        <h2 className="text-[var(--pale-blue)] text-2xl my-5">Great</h2>
        <p className="text-[var(--light-lavender)] my-4">You scored higher than 65% of the people who have taken these tests.</p>
      </div>
    </div>
  )
}

export default ResultComponent;