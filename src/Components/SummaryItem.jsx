
const SummaryItem = ({icon, score, category}) => {

  return (
    <div className={`test-result ${category} flex justify-between my-4 p-4 rounded bg-red-600`}>
      <div className="category-icon flex gap-2">
        <img src={icon} alt={category} />
        <p className={`${category} font-semibold`}>{category}</p>
      </div>
      <div className="score text-gray-500 font-bold ">
        <span className="text-[var(--dark-gray-blue)] mr-1">{score}</span> / 100
      </div>
    </div>
  )
}

export default SummaryItem;