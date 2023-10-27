import { Star } from "./Star"

export const Stars = ({count}) => {
  if (count < 1 || count > 5) {
    return
  } 

  let StarsList = new Array(count).fill(<Star />)

  return (
    <ul className="card-body-stars u-clearfix" style={{display: 'flex'}}>
      {StarsList.map((item, index) => (
        <li key={index} style={{listStyleType: 'none'}}>{item}</li>
      ))}
    </ul>
  )
}
