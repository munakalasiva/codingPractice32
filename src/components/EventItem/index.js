import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails

  const onClickEvent = () => {
    setActiveId(id)
  }

  const classValue = isActive ? 'event-img active' : 'event-img'

  return (
    <li className="list-item">
      <button type="button" onClick={onClickEvent} className="event-btn">
        <img src={imageUrl} alt="event" className={classValue} />
      </button>

      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
