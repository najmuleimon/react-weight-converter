

const WeightInput = ({weight, handleChange, title}) => {
  return (
    <div className="mb-4">
      <label className="block font-bold text-gray-700 mb-2" htmlFor="kg">
        {title}:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="kg"
        type="number"
        value={weight}
        onChange={handleChange}
      />
    </div>
  )
}

export default WeightInput